import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('funcionario')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  @Post()
  criar(@Body() data: CreateFuncionarioDto) {
    return this.funcionarioService.criar(data);
  }

  @Get()
  listarTodos() {
    return this.funcionarioService.listarTodos();
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.funcionarioService.buscarPorId(id);
  }

  @Put(':id')
  atualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateFuncionarioDto,
  ) {
    return this.funcionarioService.atualizar(id, data);
  }

  @Delete(':id')
  remover(@Param('id', ParseIntPipe) id: number) {
    return this.funcionarioService.remover(id);
  }
}
