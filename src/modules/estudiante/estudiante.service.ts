import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Curso } from 'src/modules/curso/entities/curso.entity';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private estudianteRepo: Repository<Estudiante>,

    @InjectRepository(Curso)
    private cursoRepo: Repository<Curso>,
  ) {}

  async create(dto: CreateEstudianteDto) {
    const estudiante = this.estudianteRepo.create(dto);

    if (dto.cursoId) {
      const curso = await this.cursoRepo.findOneBy({ id: dto.cursoId });
      if (!curso) throw new NotFoundException('Curso no encontrado');
      estudiante.curso = curso;
    }

    return this.estudianteRepo.save(estudiante);
  }

  findAll() {
    return this.estudianteRepo.find({ relations: ['curso'] });
  }

  async findOne(id: number) {
    const est = await this.estudianteRepo.findOne({
      where: { id },
      relations: ['curso'],
    });
    if (!est) throw new NotFoundException('Estudiante no encontrado');
    return est;
  }

  async update(id: number, dto: UpdateEstudianteDto) {
    const estudiante = await this.findOne(id);

    if (dto.cursoId) {
      const curso = await this.cursoRepo.findOneBy({ id: dto.cursoId });
      if (!curso) throw new NotFoundException('Curso no encontrado');
      estudiante.curso = curso;
    }

    Object.assign(estudiante, dto);
    return this.estudianteRepo.save(estudiante);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.estudianteRepo.delete(id);
    return { message: 'Estudiante eliminado' };
  }
}
