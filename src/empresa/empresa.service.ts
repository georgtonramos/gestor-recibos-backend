import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

function normalizarBigInt(obj: any) {
  return JSON.parse(
    JSON.stringify(obj, (_, value) =>
      typeof value === 'bigint' ? Number(value) : value
    )
  );
}

@Injectable()
export class EmpresaService {
  constructor(private prisma: PrismaService) {}

  async criar(data: CreateEmpresaDto) {
    const empresa = await this.prisma.empresas.create({ data });
    return normalizarBigInt(empresa);
  }

  async listarTodas() {
    const empresas = await this.prisma.empresas.findMany();
    return normalizarBigInt(empresas);
  }

  async buscarPorId(id: number) {
    const empresa = await this.prisma.empresas.findUnique({ where: { id } });
    return normalizarBigInt(empresa);
  }

  async atualizar(id: number, data: UpdateEmpresaDto) {
    const empresa = await this.prisma.empresas.update({ where: { id }, data });
    return normalizarBigInt(empresa);
  }

  async remover(id: number) {
    const empresa = await this.prisma.empresas.delete({ where: { id } });
    return normalizarBigInt(empresa);
  }
}
