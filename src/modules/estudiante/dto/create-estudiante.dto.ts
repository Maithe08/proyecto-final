import { IsEmail, IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateEstudianteDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  nombre: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  apellido: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsEmail()
  correo: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsInt()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Min(1)
  edad: number;
}
