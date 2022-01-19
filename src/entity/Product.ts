import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id:Number;
    
    @Column()
    description:string;

    @Column()
    price: Number;

    @Column()
    bar_code: string;

    @Column()
    group: Number

}
