import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profesor } from './entities/profesor.entity';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';

// 👇 Importaciones necesarias
import { Asignacion } from '../asignacion/entities/asignacion.entity';
import { Materia } from '../materia/entities/materia.entity';

@Injectable()
export class ProfesorService {
  constructor(
    @InjectRepository(Profesor)
    private profesorRepo: Repository<Profesor>,
  ) {}

  create(dto: CreateProfesorDto) {
    const nuevo = this.profesorRepo.create(dto);
    return this.profesorRepo.save(nuevo);
  }

  findAll() {
    return this.profesorRepo.find();
  }

  async findOne(id: number) {
    const profe = await this.profesorRepo.findOneBy({ id });
    if (!profe) throw new NotFoundException('Profesor no encontrado');
    return profe;
  }

  async update(id: number, dto: UpdateProfesorDto) {
    await this.findOne(id);
    await this.profesorRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.profesorRepo.delete(id);
    return { message: 'Profesor eliminado' };
  }

  // 🚀 Nueva función para obtener materias asignadas a un profesor
  async getMateriasAsignadas(id: number) {
    const profesor = await this.profesorRepo.findOne({
      where: { id },
      relations: ['asignaciones', 'asignaciones.materia'],
    });

    if (!profesor) {
      throw new NotFoundException('Profesor no encontrado');
    }

    return profesor.asignaciones.map((asig) => asig.materia);
  }
}
