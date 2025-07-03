import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Materia } from 'src/modules/materia/entities/materia.entity';
import { Estudiante } from 'src/modules/estudiante/entities/estudiante.entity';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  duracionHoras: number;

  @OneToMany(() => Materia, (materia) => materia.curso)
  materias: Materia[];

  @ManyToMany(() => Estudiante, (estudiante) => estudiante.cursos)
  estudiantes: Estudiante[];
}
