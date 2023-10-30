import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
    ManyToOne,
} from "typeorm";

import { Category } from "./Category";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
@Unique(["code"])
export class Product {
    @PrimaryGeneratedColumn()
    public readonly id!: number;

    @Column({ type: "varchar" })
    public code!: string;

    @Column({ type: "varchar" })
    public name!: string;

    @CreateDateColumn()
    public createdAt!: Date;

    @UpdateDateColumn()
    public updatedAt!: Date;

    @Field((_type) => Category)
    @ManyToOne((_type) => Category, (category: Category) => category.products)
    public category?: Category;
}
