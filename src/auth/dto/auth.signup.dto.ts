import { Type } from "class-transformer";
import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class AuthSignupDto {
    
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    countryCode: string;

    @IsInt()
    @Type(()=> Number)
    @IsNotEmpty()
    phone: number;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    addressLine1: string;

    @IsString()
    @IsOptional()
    addressLine2: string;

    @IsInt()
    @Type(()=> Number)
    @IsNotEmpty()
    zip: number;

    @IsString() 
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    state: string;
}