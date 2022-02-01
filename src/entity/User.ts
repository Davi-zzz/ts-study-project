import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export default class User extends BaseEntity {

    @PrimaryGeneratedColumn()
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
    

    private setUser( 
        firstName: string, 
        lastName: string, 
        age: number, 
        email: string,  
        password: string,
        ){
            this.firstName = firstName,
            this.lastName = lastName,
            this.email = email,
            this.password = password,
            this.age = age
            return this
    }
}
