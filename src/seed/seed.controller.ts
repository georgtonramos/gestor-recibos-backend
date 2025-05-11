import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';

@Controller('seed')
export class SeedController {
  constructor(private prisma: PrismaService) {}

  @Get('dados-teste')
  async seedDados() {
    const senhaHash = await bcrypt.hash('123456', 10);

    const empresa1 = await this.prisma.empresas.create({
      data: { nome: 'TechNova Ltda', cnpj: '12.345.678/0001-90', endereco: 'Av. das Inovações, 1000' },
    });

    const empresa2 = await this.prisma.empresas.create({
      data: { nome: 'Construtora Edifica', cnpj: '98.765.432/0001-01', endereco: 'Rua do Concreto, 500' },
    });

    await this.prisma.funcionarios.createMany({
      data: [
        { nome: 'Carlos Silva', cpf: '111.111.111-11', cargo: 'Analista de Sistemas', empresa_id: empresa1.id },
        { nome: 'Ana Paula', cpf: '222.222.222-22', cargo: 'Desenvolvedora Fullstack', empresa_id: empresa1.id },
        { nome: 'Diego Ramos', cpf: '333.333.333-33', cargo: 'DevOps', empresa_id: empresa1.id },
        { nome: 'Marcos Nunes', cpf: '444.444.444-44', cargo: 'Pedreiro', empresa_id: empresa2.id },
        { nome: 'Juliana Costa', cpf: '555.555.555-55', cargo: 'Engenheira Civil', empresa_id: empresa2.id },
        { nome: 'Renato Melo', cpf: '666.666.666-66', cargo: 'Auxiliar de Obras', empresa_id: empresa2.id },
      ],
    });

    const usuarioAdmin = await this.prisma.usuarios.upsert({
      where: { email: 'admin@sistema.com' },
      update: {},
      create: {
        nome: 'Administrador',
        email: 'admin@sistema.com',
        senha_hash: senhaHash,
        admin: true,
      },
    });

    // =============================
    // 🚀 Inserção de recibos falsos
    // =============================
    const funcionarios = await this.prisma.funcionarios.findMany();
    const mesesReferencia = ['2025-04', '2025-05'];

    for (const funcionario of funcionarios) {
      for (const mes of mesesReferencia) {
        const reciboExistente = await this.prisma.recibos.findFirst({
          where: {
            funcionario_id: funcionario.id,
            referencia: mes,
          },
        });

        if (!reciboExistente) {
          await this.prisma.recibos.create({
            data: {
              funcionario_id: funcionario.id,
              tipo_recibo: 'Salário',
              valor: new Prisma.Decimal((Math.random() * (5000 - 2500) + 2500).toFixed(2)),
              referencia: mes,
              data_pagamento: new Date(`${mes}-05`),
              observacao: `Pagamento referente ao mês ${mes}`,
            },
          });
        }
      }
    }

    return {
      mensagem: 'Empresas, funcionários, usuário admin e recibos criados!',
      funcionarios: funcionarios.map(f => ({
        ...f,
        id: Number(f.id),
        empresa_id: f.empresa_id ? Number(f.empresa_id) : null,
      })),
    };
  }
}
