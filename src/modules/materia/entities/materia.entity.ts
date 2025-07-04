import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Profesor } from '../../profesor/entities/profesor.entity';
import { Curso } from '../../curso/entities/curso.entity';
import { Asignacion } from '../../asignacion/entities/asignacion.entity';

@Entity()
export class Materia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  codigo: string;

  @Column()
  creditos: number;

  // Relación con profesor (opcional)
  @ManyToOne(() => Profesor, (profesor) => profesor.materias, {
    nullable: true,
  })
  profesor: Profesor;

  // Relación con curso: cada materia pertenece a un curso
  @ManyToOne(() => Curso, (curso) => curso.materias, {
    eager: true,
    nullable: true,
  })
  curso: Curso;

  // Relación con asignaciones
  @OneToMany(() => Asignacion, (asig) => asig.materia)
  asignaciones: Asignacion[];
}
