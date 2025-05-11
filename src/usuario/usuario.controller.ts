import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseIntPipe,
  Req,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from 'express';

@UseGuards(JwtAuthGuard)
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  criar(@Body() data: CreateUsuarioDto) {
    return this.usuarioService.criar(data);
  }

  @Get()
  listar() {
    return this.usuarioService.listar();
  }

  @Get('perfil')
  async perfil(@Req() req: Request) {
    const { userId } = req.user as { userId: string };

    const usuario = await this.usuarioService.buscarPorId(Number(userId));

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const { senha_hash, ...usuarioSemSenha } = usuario;

    return {
      mensagem: 'Acesso autorizado com JWT!',
      usuario: usuarioSemSenha,
    };
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.buscarPorId(id);
  }

  @Put(':id')
  atualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateUsuarioDto,
  ) {
    return this.usuarioService.atualizar(id, data);
  }

  @Delete(':id')
  remover(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.remover(id);
  }
}
