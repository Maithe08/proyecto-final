import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asignacion } from './entities/asignacion.entity';
import { CreateAsignacionDto } from './dto/create-asignacion.dto';

import { Profesor } from '../profesor/entities/profesor.entity';
import { Materia } from '../materia/entities/materia.entity';

@Injectable()
export class AsignacionService {
  constructor(
    @InjectRepository(Asignacion)
    private asignacionRepo: Repository<Asignacion>,

    @InjectRepository(Profesor)
    private profesorRepo: Repository<Profesor>,

    @InjectRepository(Materia)
    private materiaRepo: Repository<Materia>,
  ) {}

  async create(dto: CreateAsignacionDto) {
    const profesor = await this.profesorRepo.findOneBy({ id: dto.profesorId });
    const materia = await this.materiaRepo.findOneBy({ id: dto.materiaId });

    if (!profesor || !materia) {
      throw new NotFoundException('Profesor o Materia no encontrados');
    }

    const nueva = this.asignacionRepo.create({
      profesor,
      materia,
    });

    return this.asignacionRepo.save(nueva);
  }

  findAll() {
    return this.asignacionRepo.find({
      relations: ['profesor', 'materia'],
    });
  }

  async findOne(id: number) {
    const asig = await this.asignacionRepo.findOne({
      where: { id },
      relations: ['profesor', 'materia'],
    });

    if (!asig) {
      throw new NotFoundException('Asignación no encontrada');
    }

    return asig;
  }

  async update(id: number, dto: { profesorId?: number; materiaId?: number }) {
    const asignacion = await this.findOne(id);

    if (dto.profesorId) {
      const profesor = await this.profesorRepo.findOneBy({
        id: dto.profesorId,
      });
      if (!profesor) throw new NotFoundException('Profesor no encontrado');
      asignacion.profesor = profesor;
    }

    if (dto.materiaId) {
      const materia = await this.materiaRepo.findOneBy({ id: dto.materiaId });
      if (!materia) throw new NotFoundException('Materia no encontrada');
      asignacion.materia = materia;
    }

    return this.asignacionRepo.save(asignacion);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.asignacionRepo.delete(id);
    return { message: 'Asignación eliminada' };
  }
}
