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
  Req,
  Res,
  ForbiddenException,
} from '@nestjs/common';
import { ReciboService } from './recibo.service';
import { CreateReciboDto } from './dto/create-recibo.dto';
import { UpdateReciboDto } from './dto/update-recibo.dto';
import { Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RequestWithUser } from '../auth/request-with-user.interface';
import { GerarMultiploReciboDto } from './dto/gerar-multiplo-recibo.dto';

@UseGuards(JwtAuthGuard)
@Controller('recibo')
export class ReciboController {
  constructor(private readonly reciboService: ReciboService) {}

  @Post()
  criar(@Body() data: CreateReciboDto) {
    return this.reciboService.criar(data);
  }

  @Get()
  listarTodos(@Req() req: RequestWithUser) {
    if (!req.user.admin) {
      throw new ForbiddenException('Apenas administradores podem ver todos os recibos');
    }
    return this.reciboService.listarTodos();
  }

  @Get('meus-recibos')
  meusRecibos(@Req() req: RequestWithUser) {
    const { userId } = req.user;
    return this.reciboService.listarPorFuncionario(userId);
  }

  @Get(':id')
  async buscarPorId(@Param('id', ParseIntPipe) id: number, @Req() req: RequestWithUser) {
    const recibo = await this.reciboService.buscarPorId(id);
    const { userId, admin } = req.user;

    if (!recibo) {
      throw new ForbiddenException('Recibo não encontrado');
    }

    if (!admin && Number(recibo.funcionario_id) !== userId) {
      throw new ForbiddenException('Você não tem permissão para acessar este recibo');
    }

    return recibo;
  }

  @Put(':id')
  atualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateReciboDto,
  ) {
    return this.reciboService.atualizar(id, data);
  }

  @Delete(':id')
  remover(@Param('id', ParseIntPipe) id: number) {
    return this.reciboService.remover(id);
  }

  @Get(':id/pdf')
  async gerarPdf(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: RequestWithUser,
    @Res() res: Response,
  ) {
    const { userId, admin } = req.user;
    const recibo = await this.reciboService.buscarPorId(id);

    if (!recibo) {
      throw new ForbiddenException('Recibo não encontrado');
    }

    if (!admin && Number(recibo.funcionario_id) !== userId) {
      throw new ForbiddenException('Você não tem permissão para acessar este recibo');
    }

    return this.reciboService.gerarPdf(id, res);
  }

  @Post('pdf-multiplo')
  async gerarPdfMultiplo(@Body() data: GerarMultiploReciboDto, @Res() res: Response) {
    return this.reciboService.gerarPdfMultiplo(data, res);
  }
}
