import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class PostDto {
    
    

    @IsString()
    @IsNotEmpty()
    postTitle: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsOptional()
    tagName: string;

}