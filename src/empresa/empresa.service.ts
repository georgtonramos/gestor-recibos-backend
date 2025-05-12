import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EmpresaService {
  constructor(private prisma: PrismaService) {}

  async criar(data: any) {
    const empresa = await this.prisma.empresas.create({
      data: {
        nome: data.name,
        cnpj: data.cnpj,
        endereco: data.address,
        contato: data.contact,
      },
    });

    return {
      id: Number(empresa.id),
      name: empresa.nome,
      cnpj: empresa.cnpj,
      address: empresa.endereco,
      contact: empresa.contato ?? '',
    };
  }

  async listarTodas() {
    const empresas = await this.prisma.empresas.findMany();

    return empresas.map((empresa) => ({
      id: Number(empresa.id),
      name: empresa.nome,
      cnpj: empresa.cnpj,
      address: empresa.endereco,
      contact: empresa.contato ?? '',
    }));
  }

  async buscarPorId(id: number) {
    const empresa = await this.prisma.empresas.findUnique({ where: { id } });

    if (!empresa) {
      throw new NotFoundException('Empresa não encontrada');
    }

    return {
      id: Number(empresa.id),
      name: empresa.nome,
      cnpj: empresa.cnpj,
      address: empresa.endereco,
      contact: empresa.contato ?? '',
    };
  }

  async atualizar(id: number, data: any) {
    const empresa = await this.prisma.empresas.update({
      where: { id },
      data: {
        nome: data.name,
        cnpj: data.cnpj,
        endereco: data.address,
        contato: data.contact,
      },
    });

    return {
      id: Number(empresa.id),
      name: empresa.nome,
      cnpj: empresa.cnpj,
      address: empresa.endereco,
      contact: empresa.contato ?? '',
    };
  }

  async remover(id: number) {
    const empresa = await this.prisma.empresas.delete({ where: { id } });

    return {
      id: Number(empresa.id),
      name: empresa.nome,
      cnpj: empresa.cnpj,
      address: empresa.endereco,
      contact: empresa.contato ?? '',
    };
  }
}
