import { IsNotEmpty, IsNumber, IsString, IsUUID, UUIDVersion } from "class-validator";

export class ProductInputDTO  {

    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    price: Number;

    @IsNotEmpty()
    @IsUUID()
    bar_code: string;

    @IsNotEmpty()
    @IsNumber()
    group: Number;

}
export class ProductGetDTO {

    @IsNumber()
    @IsNotEmpty()
    id: string;
}

export class ProductUpdateDTO {

    @IsString()
    description?: string;

    @IsNotEmpty()
    @IsNumber()
    price?: Number;

    @IsNotEmpty()
    @IsUUID()
    bar_code?: string;

    @IsNotEmpty()
    @IsNumber()
    group?: Number;
}
