import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private estudianteRepo: Repository<Estudiante>,
  ) {}

  create(dto: CreateEstudianteDto) {
    const nuevo = this.estudianteRepo.create(dto);
    return this.estudianteRepo.save(nuevo);
  }

  findAll() {
    return this.estudianteRepo.find();
  }

  async findOne(id: number) {
    const est = await this.estudianteRepo.findOneBy({ id });
    if (!est) throw new NotFoundException('Estudiante no encontrado');
    return est;
  }

  async update(id: number, dto: UpdateEstudianteDto) {
    await this.findOne(id);
    await this.estudianteRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.estudianteRepo.delete(id);
    return { message: 'Estudiante eliminado' };
  }
}
