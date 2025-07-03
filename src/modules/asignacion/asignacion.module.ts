import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asignacion } from './entities/asignacion.entity';
import { AsignacionService } from './asignacion.service';
import { AsignacionController } from './asignacion.controller';
import { Profesor } from '../profesor/entities/profesor.entity';
import { Materia } from '../materia/entities/materia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asignacion, Profesor, Materia])],
  controllers: [AsignacionController],
  providers: [AsignacionService],
})
export class AsignacionModule {}
