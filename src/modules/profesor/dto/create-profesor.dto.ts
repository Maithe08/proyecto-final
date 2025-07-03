import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateProfesorDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty({ message: 'El apellido es obligatorio' })
  apellido: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty({ message: 'La especialidad es obligatoria' })
  especialidad: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsEmail({}, { message: 'Correo no válido' })
  correo: string;
}
