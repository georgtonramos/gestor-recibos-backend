import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReciboDto } from './dto/create-recibo.dto';
import { UpdateReciboDto } from './dto/update-recibo.dto';
import { Response } from 'express';
import { CreateReciboMultiploDto } from './dto/create-recibo-multiplo.dto';
import { GerarMultiploReciboDto } from './dto/gerar-multiplo-recibo.dto';

const PDFDocument = require('pdfkit');

@Injectable()
export class ReciboService {
  constructor(private prisma: PrismaService) {}

  async criar(data: CreateReciboDto) {
    const created = await this.prisma.recibos.create({
      data: {
        ...data,
        data_pagamento: data.data_pagamento
          ? new Date(data.data_pagamento)
          : undefined,
      },
    });
    return { ...created, id: Number(created.id), funcionario_id: Number(created.funcionario_id) };
  }

  async listarTodos() {
    const recibos = await this.prisma.recibos.findMany({
      include: {
        funcionarios: {
          include: { empresas: true },
        },
      },
    });

    return recibos.map((r) => ({
      ...r,
      id: Number(r.id),
      funcionario_id: Number(r.funcionario_id),
      funcionarios: {
        ...r.funcionarios,
        id: Number(r.funcionarios?.id),
        empresa_id: Number(r.funcionarios?.empresa_id),
        empresas: {
          ...r.funcionarios?.empresas,
          id: Number(r.funcionarios?.empresas?.id),
        },
      },
    }));
  }

  async buscarPorId(id: number) {
    const recibo = await this.prisma.recibos.findUnique({
      where: { id },
      include: {
        funcionarios: {
          include: { empresas: true },
        },
      },
    });

    if (!recibo) return null;

    return {
      ...recibo,
      id: Number(recibo.id),
      funcionario_id: Number(recibo.funcionario_id),
      funcionarios: {
        ...recibo.funcionarios,
        id: Number(recibo.funcionarios?.id),
        empresa_id: Number(recibo.funcionarios?.empresa_id),
        empresas: {
          ...recibo.funcionarios?.empresas,
          id: Number(recibo.funcionarios?.empresas?.id),
        },
      },
    };
  }

  async atualizar(id: number, data: UpdateReciboDto) {
    const updated = await this.prisma.recibos.update({ where: { id }, data });
    return { ...updated, id: Number(updated.id), funcionario_id: Number(updated.funcionario_id) };
  }

  async remover(id: number) {
    const removed = await this.prisma.recibos.delete({ where: { id } });
    return { ...removed, id: Number(removed.id), funcionario_id: Number(removed.funcionario_id) };
  }

  async listarPorFuncionario(funcionario_id: number) {
    const recibos = await this.prisma.recibos.findMany({
      where: { funcionario_id },
      include: {
        funcionarios: {
          include: { empresas: true },
        },
      },
      orderBy: {
        data_pagamento: 'desc',
      },
    });

    return recibos.map((r) => ({
      ...r,
      id: Number(r.id),
      funcionario_id: Number(r.funcionario_id),
      funcionarios: {
        ...r.funcionarios,
        id: Number(r.funcionarios?.id),
        empresa_id: Number(r.funcionarios?.empresa_id),
        empresas: {
          ...r.funcionarios?.empresas,
          id: Number(r.funcionarios?.empresas?.id),
        },
      },
    }));
  }

  async gerarPdf(id: number, res: Response) {
    const recibo = await this.buscarPorId(id);

    if (!recibo) {
      throw new NotFoundException(`Recibo com ID ${id} não encontrado`);
    }

    const doc = new PDFDocument({ margin: 50 });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      `inline; filename=recibo-${recibo.id}.pdf`,
    );

    doc.pipe(res);

    const empresa = recibo.funcionarios?.empresas;
    const funcionario = recibo.funcionarios;

    doc
      .fontSize(20)
      .font('Helvetica-Bold')
      .text(empresa?.nome?.toUpperCase() || 'EMPRESA', { align: 'center' })
      .moveDown(0.5);

    doc
      .fontSize(10)
      .text(`CNPJ: ${empresa?.cnpj || '---'}`, { align: 'center' })
      .text(`Endereço: ${empresa?.endereco || '---'}`, { align: 'center' })
      .moveDown();

    doc
      .fontSize(16)
      .font('Helvetica-Bold')
      .text('RECIBO DE PAGAMENTO', { align: 'center' })
      .moveDown();

    doc
      .fontSize(12)
      .font('Helvetica')
      .text(`Funcionário: ${funcionario?.nome}`, { continued: true })
      .text(`   CPF: ${funcionario?.cpf || ''}`)
      .text(`Cargo: ${funcionario?.cargo || '---'}`)
      .moveDown(0.5);

    doc
      .font('Helvetica-Bold')
      .text(`Referência: ${recibo.referencia}`)
      .text(`Data de Pagamento: ${new Date(recibo.data_pagamento!).toLocaleDateString('pt-BR')}`)
      .moveDown(0.5);

    doc
      .fontSize(14)
      .fillColor('green')
      .text(`Valor: R$ ${recibo.valor?.toFixed(2)}`, { align: 'right' })
      .fillColor('black')
      .moveDown(1);

    if (recibo.observacao) {
      doc
        .fontSize(11)
        .font('Helvetica-Oblique')
        .text(`Obs: ${recibo.observacao}`, { align: 'left' })
        .moveDown(1);
    }

    const assinaturaY = doc.y + 50;
    doc.moveTo(50, assinaturaY).lineTo(300, assinaturaY).stroke();

    doc
      .font('Helvetica')
      .fontSize(10)
      .text('Assinatura do Funcionário', 50, assinaturaY + 5);

    doc.end();
  }

  async gerarPdfMultiplo(data: GerarMultiploReciboDto, res: Response) {
    const empresa = await this.prisma.empresas.findUnique({ where: { id: data.empresaId } });

    const funcionarios = await Promise.all(
      data.funcionarios.map(async (f) => {
        const funcionario = await this.prisma.funcionarios.findUnique({ where: { id: f.id } });
        return {
          nome: funcionario?.nome || '',
          cargo: funcionario?.cargo || '',
          dias: f.dias,
          valor: f.dias * data.valorDia,
        };
      })
    );

    const total = funcionarios.reduce((sum, f) => sum + f.valor, 0);

    const doc = new PDFDocument({ margin: 50 });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename=recibo-multiplo.pdf');

    doc.pipe(res);

    doc
      .fontSize(16)
      .font('Helvetica-Bold')
      .text(empresa?.nome?.toUpperCase() || 'EMPRESA', { align: 'center' })
      .fontSize(10)
      .font('Helvetica')
      .text(`CNPJ: ${empresa?.cnpj || '---'}`, { align: 'center' })
      .text(`Endereço: ${empresa?.endereco || '---'}`, { align: 'center' })
      .moveDown();

    doc
      .font('Helvetica-Bold')
      .text(`Referência: ${data.referencia}`)
      .text(`Período: ${data.periodoInicio} a ${data.periodoFim}`)
      .moveDown();

    const startX = doc.page.margins.left;
    const cols = {
      nome: startX,
      cargo: startX + 150,
      dias: startX + 350,
      valor: startX + 420,
    };
    let y = doc.y;

    doc
      .fontSize(10)
      .font('Helvetica-Bold')
      .text('Funcionário', cols.nome, y, { width: 150 })
      .text('Cargo', cols.cargo, y, { width: 180 })
      .text('Dias', cols.dias, y, { width: 40, align: 'right' })
      .text('Valor', cols.valor, y, { width: 80, align: 'right' });

    doc.moveTo(startX, y + 14).lineTo(startX + 500, y + 14).stroke();
    y += 20;

    doc.font('Helvetica').fontSize(10);
    funcionarios.forEach((f) => {
      doc
        .text(f.nome, cols.nome, y, { width: 150 })
        .text(f.cargo, cols.cargo, y, { width: 180 })
        .text(f.dias.toString(), cols.dias, y, { width: 40, align: 'right' })
        .text(`R$ ${f.valor.toFixed(2)}`, cols.valor, y, { width: 80, align: 'right' });

      doc.moveTo(startX, y + 14).lineTo(startX + 500, y + 14).stroke();
      y += 20;
    });

    doc
      .font('Helvetica-Bold')
      .text(`Total: R$ ${total.toFixed(2)}`, cols.valor, y + 10, { align: 'right' });

    doc.moveDown(2);

    for (const f of data.funcionarios) {
      doc
        .font('Helvetica')
        .fontSize(10)
        .text(f.nome, 50, doc.y, { width: 250 })
        .moveDown(0.5);

      doc
        .moveTo(50, doc.y)
        .lineTo(300, doc.y)
        .stroke();

      doc.moveDown(1);
    }

    const hoje = new Date();
    const dataFormatada = hoje.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    doc
      .moveDown(1)
      .fontSize(10)
      .text(`São Luís-MA, ${dataFormatada}.`, {
        align: 'right',
      });

    doc.end();
  }
}
