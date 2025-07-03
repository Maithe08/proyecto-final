import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Profesor } from 'src/modules/profesor/entities/profesor.entity';
import { Curso } from 'src/modules/curso/entities/curso.entity';
import { Asignacion } from 'src/modules/asignacion/entities/asignacion.entity';

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

  @ManyToOne(() => Profesor, (profesor) => profesor.materias, {
    nullable: true,
  })
  profesor: Profesor;

  @ManyToOne(() => Curso, (curso) => curso.materias, { nullable: true })
  curso: Curso;

  @OneToMany(() => Asignacion, (asig) => asig.materia)
  asignaciones: Asignacion[];
}
