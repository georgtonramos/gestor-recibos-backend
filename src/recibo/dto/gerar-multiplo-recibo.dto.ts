import {
  IsNumber,
  IsArray,
  ValidateNested,
  IsString,
  IsDefined,
} from 'class-validator';
import { Type } from 'class-transformer';

class FuncionarioPdfDto {
  @IsDefined()
  @IsNumber({}, { message: 'id deve ser um número' })
  id: number;

  @IsString()
  nome: string;

  @IsString()
  cargo: string;

  @IsNumber()
  dias: number;
}

export class GerarMultiploReciboDto {
  @IsNumber()
  empresaId: number;

  @IsString()
  referencia: string;

  @IsString()
  periodoInicio: string;

  @IsString()
  periodoFim: string;

  @IsNumber()
  valorDia: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FuncionarioPdfDto)
  funcionarios: FuncionarioPdfDto[];
}
