import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Estudiante } from '../../estudiante/entities/estudiante.entity';
import { Materia } from '../../materia/entities/materia.entity';

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

  // Relación con estudiantes: un curso tiene muchos estudiantes
  @OneToMany(() => Estudiante, (estudiante) => estudiante.curso)
  estudiantes: Estudiante[];

  // Relación con materias: un curso tiene muchas materias
  @OneToMany(() => Materia, (materia) => materia.curso)
  materias: Materia[];
}
