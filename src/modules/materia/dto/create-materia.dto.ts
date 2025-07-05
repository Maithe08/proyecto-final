import { IsNotEmpty, IsInt, Min, IsOptional } from 'class-validator';

export class CreateMateriaDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @IsNotEmpty({ message: 'El código es obligatorio' })
  codigo: string;

  @IsInt({ message: 'Los créditos deben ser un número entero' })
  @Min(1, { message: 'Los créditos deben ser al menos 1' })
  creditos: number;

  @IsOptional()
  @IsInt({ message: 'El ID del curso debe ser un número entero' })
  cursoId?: number;
}
