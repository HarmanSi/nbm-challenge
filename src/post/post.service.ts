import { ForbiddenException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostDto } from './dto';

@Injectable()
export class PostService {
    constructor( private prisma: PrismaService){}
    
    
    async createPost(dto: PostDto, user: User){
        //save the new post details in db
        try {
            const newPost = await this.prisma.post.create({
                data: { 
                    postTitle: dto.postTitle,
                    description: dto.description,
                    authorId: user.userId,
                },
                
            });
            const tag = await this.prisma.tag.create({
                data:{
                    tagName: dto.tagName,
                }
            })
        } catch (error) {
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code === 'P2002'){
                    throw new ForbiddenException('Duplicate value is not allowed')
                }
            }
            throw error;
            
        }
        
       
        return 'post created :) You can view the list of posts via users/me/posts '

    }

    viewPosts(){

    
        return this.prisma.post.findMany({
            where: {
                postId: {}
              }, 
        });
        
    }

}
