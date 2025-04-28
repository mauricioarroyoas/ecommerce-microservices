import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Rating {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column() // temporarily
  stars!: number;
  
  @Column()
  productId!: number;

  @Column()
  userId!: number;

  constructor(stars: number, productId: number, userId: number) {
    this.stars = stars;
    this.productId = productId;
    this.userId = userId;
    
  }
}
