import { IsNotEmpty, IsNumber, IsString, IsUUID, IsOptional } from "class-validator";

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
    @IsOptional()
    description?: string;

    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    price?: Number;

    @IsNotEmpty()
    @IsOptional()
    @IsUUID()
    bar_code?: string;

    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    group?: Number;
}
