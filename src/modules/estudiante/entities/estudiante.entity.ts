import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Curso } from '../../curso/entities/curso.entity';

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  correo: string;

  @Column()
  edad: number;

  // Relación con curso: cada estudiante pertenece a un curso
  @ManyToOne(() => Curso, (curso) => curso.estudiantes, {
    eager: true,
    onDelete: 'SET NULL',
    nullable: true,
  })
  curso: Curso;
}
