import { IsInt, Min } from 'class-validator';

export class CreateAsignacionDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsInt()

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Min(1)
  profesorId: number;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsInt()

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Min(1)
  materiaId: number;
}
