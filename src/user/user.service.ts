import { ForbiddenException, Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { PrismaService } from "src/prisma/prisma.service";
import { UserPostDto } from "./dto";

@Injectable()
export class UserService{
    constructor(){}
    
    
    

}