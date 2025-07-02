import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
