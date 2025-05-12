import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateEmpresaDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  cnpj?: string;

  @IsOptional()
  endereco?: string;

  @IsOptional()
  contato?: string;
}
