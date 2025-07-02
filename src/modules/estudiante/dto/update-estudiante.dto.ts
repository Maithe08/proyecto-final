import { PartialType } from '@nestjs/mapped-types';
import { CreateEstudianteDto } from './create-estudiante.dto';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export class UpdateEstudianteDto extends PartialType(CreateEstudianteDto) {}
