import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AuthDto {
    
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    countryCode: string;

    @IsNumber()
    @IsNotEmpty()
    phone: number;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}