import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Materia } from './entities/materia.entity';
import { MateriaService } from './materia.service';
import { MateriaController } from './materia.controller';

// 👇 Nuevas importaciones
import { Asignacion } from '../asignacion/entities/asignacion.entity';
import { Profesor } from '../profesor/entities/profesor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Materia, Asignacion, Profesor])],
  controllers: [MateriaController],
  providers: [MateriaService],
})
export class MateriaModule {}
