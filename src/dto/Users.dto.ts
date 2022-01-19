import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UsersInputDTO {

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    firstName?: string;
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    lastName?: string;
    
    @IsNotEmpty()
    @IsEmail()
    @IsOptional()
    email?: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    agr?: Number;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    password?: string;

}

export class UsersGetDTO {

    @IsNotEmpty()
    @IsNumber()
    id: Number;
}

export class UsersUpdateDTO {

    @IsString()
    @IsNotEmpty()
    firstName: string;
    
    @IsString()
    @IsNotEmpty()
    lastName: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNumber()
    @IsNotEmpty()
    agr: Number;

    @IsString()
    @IsNotEmpty()
    password?: string;

}