import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UserPostDto } from "./dto";

@Injectable()
export class UserService{
    constructor( private prisma: PrismaService){}
    
    
    async createPost(dto: UserPostDto){
        //save the new post details in db
        const newPost = await this.prisma.post.create({
            data: { 
                postTitle: dto.postTitle,
                description: dto.description,
                
            },
        });
        const tag = await this.prisma.tag.create({
            data:{
                tagName: dto.tagName,
            }
        })
       
        return 'post created :)'

    }

    viewPosts(){
        return 'Posts data'
    }

}