export class CreateReciboMultiploDto {
    empresaId: number;
    referencia: string;
    periodoInicio: string;
    periodoFim: string;
    valorDia: number;
    funcionarios: {
      nome: string;
      cargo: string;
      dias: number;
      valor: number;
    }[];
  }
  