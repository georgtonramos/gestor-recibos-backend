import { IsNotEmpty, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class CreateReciboDto {
  @IsNumber()
  funcionario_id: number;

  @IsNotEmpty()
  tipo_recibo: string;

  @IsNumber()
  valor: number;

  @IsNotEmpty()
  referencia: string;

  @IsOptional()
  @IsDateString()
  data_pagamento?: string;

  @IsOptional()
  observacao?: string;
}
