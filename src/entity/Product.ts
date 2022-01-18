import {Column, Double, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id:Number;
    
    @Column()
    description:string;

    @Column()
    price: Double;

    @Column()
    bar_code: string;

    @Column()
    group: Number

}
