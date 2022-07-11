import { Body, Controller, Get, Post, Redirect, Req, Request, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { response } from 'express';
import { GetUser } from '../auth/decorator';

import {JwtGuard} from '../auth/guard'
import { UserPostDto } from './dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor(private userService: UserService){}

    @UseGuards(JwtGuard)
    @Get('me')
    getme(@GetUser() user: User){
        return user ;
    }

    @UseGuards(JwtGuard)
    @Get('me/posts')
    viewPosts(){
        return this.userService.viewPosts();
    }

    @UseGuards(JwtGuard)
    @Post('me/createpost')
    createPost(@Body() dto: UserPostDto){
        return this.userService.createPost(dto);
       //return response.redirect('localhost:3000/users/me/posts');
        
    }

    
}
