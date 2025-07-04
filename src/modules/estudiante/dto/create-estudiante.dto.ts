import { IsEmail, IsInt, IsNotEmpty, IsOptional, Min } from 'class-validator';

export class CreateEstudianteDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  apellido: string;

  @IsEmail()
  correo: string;

  @IsInt()
  @Min(1)
  edad: number;

  @IsOptional()
  @IsInt()
  cursoId?: number;
}
