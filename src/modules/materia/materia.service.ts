import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Materia } from './entities/materia.entity';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { Curso } from '../curso/entities/curso.entity';

@Injectable()
export class MateriaService {
  constructor(
    @InjectRepository(Materia)
    private readonly materiaRepo: Repository<Materia>,

    @InjectRepository(Curso)
    private readonly cursoRepo: Repository<Curso>,
  ) {}

  async create(dto: CreateMateriaDto) {
    const nueva = this.materiaRepo.create(dto);

    if (dto.cursoId) {
      const curso = await this.cursoRepo.findOneBy({ id: dto.cursoId });
      if (!curso) {
        throw new NotFoundException('Curso no encontrado');
      }
      nueva.curso = curso;
    }

    return this.materiaRepo.save(nueva);
  }

  findAll() {
    return this.materiaRepo.find();
  }

  async findOne(id: number) {
    const materia = await this.materiaRepo.findOne({
      where: { id },
      relations: ['curso'], // importante si quieres ver el curso asignado
    });

    if (!materia) {
      throw new NotFoundException('Materia no encontrada');
    }

    return materia;
  }

  async update(id: number, dto: UpdateMateriaDto) {
    const materia = await this.findOne(id);
    const updated = Object.assign(materia, dto);

    if (dto.cursoId) {
      const curso = await this.cursoRepo.findOneBy({ id: dto.cursoId });
      if (!curso) {
        throw new NotFoundException('Curso no encontrado');
      }
      updated.curso = curso;
    }

    return this.materiaRepo.save(updated);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.materiaRepo.delete(id);
    return { message: 'Materia eliminada' };
  }

  async getProfesoresAsignados(id: number) {
    const materia = await this.materiaRepo.findOne({
      where: { id },
      relations: ['asignaciones', 'asignaciones.profesor'],
    });

    if (!materia) {
      throw new NotFoundException('Materia no encontrada');
    }

    return materia.asignaciones.map((asig) => asig.profesor);
  }
}
