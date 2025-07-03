import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesor } from './entities/profesor.entity';
import { ProfesorService } from './profesor.service';
import { ProfesorController } from './profesor.controller';

// 👇 Importar también estas dos entidades
import { Asignacion } from '../asignacion/entities/asignacion.entity';
import { Materia } from '../materia/entities/materia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profesor, Asignacion, Materia])],
  controllers: [ProfesorController],
  providers: [ProfesorService],
})
export class ProfesorModule {}
