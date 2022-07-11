import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { PostDto } from './dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {

    constructor(private postService: PostService){}
    @UseGuards(JwtGuard)
    @Get('/viewposts/')
    viewPosts(){
        return this.postService.viewPosts();
    }

    @UseGuards(JwtGuard)
    @Post('createpost')
    createPost(@Body() dto: PostDto, @GetUser() user: User){
        console.log()
        return this.postService.createPost(dto, user);
       //return response.redirect('localhost:3000/users/me/posts');
        
    }
}
