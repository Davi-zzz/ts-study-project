import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export default class User extends BaseEntity {

    
    @PrimaryGeneratedColumn({unsigned: true})
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    email: string;

    @Column()
    password: string;

}
