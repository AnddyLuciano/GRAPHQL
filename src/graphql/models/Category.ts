import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
    JoinColumn,
    OneToMany,
  } from "typeorm";
import { Product } from "./Product";

  @Entity()

  @Unique(["code"])

  export class Category{
    @PrimaryGeneratedColumn()
    readonly id!:string

    @Column({type:"varchar"})
    code!:string

    @Column({type:"varchar"})
    name!:string

    @CreateDateColumn()
    createdAt!:Date

    @UpdateDateColumn()
    updatedAt!:Date

    @OneToMany((_type=>Product),(product:Product)=>product.id)
    @JoinColumn({name:"productId"})
    product!:Array<Product>
  }
  