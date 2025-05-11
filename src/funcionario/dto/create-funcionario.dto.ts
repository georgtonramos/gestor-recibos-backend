import { IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateFuncionarioDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  cpf?: string;

  @IsOptional()
  cargo?: string;

  @IsNumber()
  empresa_id: number;
}
