import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Injectable()
export class FuncionarioService {
  constructor(private prisma: PrismaService) {}

  async criar(data: CreateFuncionarioDto) {
    const funcionario = await this.prisma.funcionarios.create({
      data,
      include: { empresas: true },
    });

    return {
      ...funcionario,
      id: Number(funcionario.id),
      empresa_id: Number(funcionario.empresa_id),
      empresas: {
        ...funcionario.empresas,
        id: Number(funcionario.empresas?.id),
      },
    };
  }

  async listarTodos() {
    const funcionarios = await this.prisma.funcionarios.findMany({
      include: { empresas: true },
    });

    return funcionarios.map((f) => ({
      ...f,
      id: Number(f.id),
      empresa_id: Number(f.empresa_id),
      empresas: {
        ...f.empresas,
        id: Number(f.empresas?.id),
      },
    }));
  }

  async buscarPorId(id: number) {
    const funcionario = await this.prisma.funcionarios.findUnique({
      where: { id },
      include: { empresas: true },
    });

    return funcionario
      ? {
          ...funcionario,
          id: Number(funcionario.id),
          empresa_id: Number(funcionario.empresa_id),
          empresas: {
            ...funcionario.empresas,
            id: Number(funcionario.empresas?.id),
          },
        }
      : null;
  }

  async atualizar(id: number, data: UpdateFuncionarioDto) {
    const funcionario = await this.prisma.funcionarios.update({
      where: { id },
      data,
      include: { empresas: true },
    });

    return {
      ...funcionario,
      id: Number(funcionario.id),
      empresa_id: Number(funcionario.empresa_id),
      empresas: {
        ...funcionario.empresas,
        id: Number(funcionario.empresas?.id),
      },
    };
  }

  async remover(id: number) {
    const funcionario = await this.prisma.funcionarios.delete({
      where: { id },
      include: { empresas: true },
    });

    return {
      ...funcionario,
      id: Number(funcionario.id),
      empresa_id: Number(funcionario.empresa_id),
      empresas: {
        ...funcionario.empresas,
        id: Number(funcionario.empresas?.id),
      },
    };
  }
}
