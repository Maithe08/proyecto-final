import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Materia } from './entities/materia.entity';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';

@Injectable()
export class MateriaService {
  constructor(
    @InjectRepository(Materia)
    private materiaRepo: Repository<Materia>,
  ) {}

  create(dto: CreateMateriaDto) {
    const nueva = this.materiaRepo.create(dto);
    return this.materiaRepo.save(nueva);
  }

  findAll() {
    return this.materiaRepo.find();
  }

  async findOne(id: number) {
    const materia = await this.materiaRepo.findOneBy({ id });
    if (!materia) throw new NotFoundException('Materia no encontrada');
    return materia;
  }

  async update(id: number, dto: UpdateMateriaDto) {
    await this.findOne(id);
    await this.materiaRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.materiaRepo.delete(id);
    return { message: 'Materia eliminada' };
  }

  // ✅ Nuevo método
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
