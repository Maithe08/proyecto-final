import { IsNotEmpty, IsInt, Min } from 'class-validator';

export class CreateCursoDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty({ message: 'La descripción es obligatoria' })
  descripcion: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsInt({ message: 'La duración debe ser un número entero' })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Min(1, { message: 'La duración debe ser mayor a 0' })
  duracionHoras: number;
}
