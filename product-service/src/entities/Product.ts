import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column("decimal")
  price!: number;
}
