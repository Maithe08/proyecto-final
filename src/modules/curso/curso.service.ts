import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './entities/curso.entity';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso)
    private cursoRepo: Repository<Curso>,
  ) {}

  create(dto: CreateCursoDto) {
    const nuevo = this.cursoRepo.create(dto);
    return this.cursoRepo.save(nuevo);
  }

  findAll() {
    return this.cursoRepo.find();
  }

  async findOne(id: number) {
    const curso = await this.cursoRepo.findOneBy({ id });
    if (!curso) throw new NotFoundException('Curso no encontrado');
    return curso;
  }

  async update(id: number, dto: UpdateCursoDto) {
    await this.findOne(id);
    await this.cursoRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.cursoRepo.delete(id);
    return { message: 'Curso eliminado' };
  }
}
