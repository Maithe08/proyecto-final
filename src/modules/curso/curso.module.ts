import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { Estudiante } from '../estudiante/entities/estudiante.entity';
import { Materia } from '../materia/entities/materia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curso, Estudiante, Materia])],
  controllers: [CursoController],
  providers: [CursoService],
})
export class CursoModule {}
