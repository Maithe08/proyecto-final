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
    private readonly cursoRepo: Repository<Curso>,
  ) {}

  // Crear curso
  create(dto: CreateCursoDto) {
    const curso = this.cursoRepo.create(dto);
    return this.cursoRepo.save(curso);
  }

  // Listar todos los cursos con estudiantes y materias
  findAll() {
    return this.cursoRepo.find({ relations: ['estudiantes', 'materias'] });
  }

  // Obtener un curso por ID con relaciones
  async findOne(id: number) {
    const curso = await this.cursoRepo.findOne({
      where: { id },
      relations: ['estudiantes', 'materias'],
    });
    if (!curso) throw new NotFoundException(`Curso with id ${id} not found`);
    return curso;
  }

  // Actualizar curso
  async update(id: number, dto: UpdateCursoDto) {
    await this.findOne(id);
    await this.cursoRepo.update(id, dto);
    return this.findOne(id);
  }

  // Eliminar curso
  async remove(id: number) {
    await this.findOne(id);
    await this.cursoRepo.delete(id);
    return { message: 'Curso eliminado' };
  }
}
