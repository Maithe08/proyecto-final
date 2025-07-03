import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Profesor } from 'src/modules/profesor/entities/profesor.entity';
import { Curso } from 'src/modules/curso/entities/curso.entity';

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

  @ManyToOne(() => Profesor, (profesor) => profesor.materias)
  profesor: Profesor;

  @ManyToOne(() => Curso, (curso) => curso.materias)
  curso: Curso;
}
