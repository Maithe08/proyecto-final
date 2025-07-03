import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Profesor } from 'src/modules/profesor/entities/profesor.entity';
import { Materia } from 'src/modules/materia/entities/materia.entity';

@Entity()
export class Asignacion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Profesor, (profesor) => profesor.asignaciones, {
    eager: true,
  })
  @JoinColumn({ name: 'profesorId' })
  profesor: Profesor;

  @ManyToOne(() => Materia, (materia) => materia.asignaciones, { eager: true })
  @JoinColumn({ name: 'materiaId' })
  materia: Materia;
}
