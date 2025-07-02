import { IsNotEmpty, IsInt, Min } from 'class-validator';

export class CreateMateriaDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty({ message: 'El código es obligatorio' })
  codigo: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsInt({ message: 'Los créditos deben ser un número entero' })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Min(1, { message: 'Los créditos deben ser al menos 1' })
  creditos: number;
}
