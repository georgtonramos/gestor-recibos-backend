import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

function converterBigInt(obj: any): any {
  return JSON.parse(
    JSON.stringify(obj, (_, value) =>
      typeof value === 'bigint' ? value.toString() : value,
    ),
  );
}

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async criar(data: CreateUsuarioDto) {
    const { senha, ...resto } = data;
    const senha_hash = await bcrypt.hash(senha, 10);

    try {
      const novoUsuario = await this.prisma.usuarios.create({
        data: { ...resto, senha_hash },
      });
      return converterBigInt(novoUsuario);
    } catch (err) {
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === 'P2002'
      ) {
        throw new ConflictException('E-mail já está em uso.');
      }
      throw err;
    }
  }

  async listar() {
    const usuarios = await this.prisma.usuarios.findMany();
    return converterBigInt(usuarios);
  }

  async buscarPorId(id: number) {
    const usuario = await this.prisma.usuarios.findUnique({ where: { id } });
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return converterBigInt(usuario);
  }

  async atualizar(id: number, data: UpdateUsuarioDto) {
    const { nome, email, senha } = data;

    const updateData: any = {
      ...(nome !== undefined && { nome }),
      ...(email !== undefined && { email }),
    };

    if (senha) {
      updateData.senha_hash = await bcrypt.hash(senha, 10);
    }

    const atualizado = await this.prisma.usuarios.update({
      where: { id },
      data: updateData,
    });

    return converterBigInt(atualizado);
  }

  async remover(id: number) {
    const removido = await this.prisma.usuarios.delete({ where: { id } });
    return converterBigInt(removido);
  }
}
