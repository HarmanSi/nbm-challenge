import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { PostController } from './post/post.controller';
import { PostModule } from './post/post.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
     AuthModule,
     UserModule,
     PrismaModule,
     PostModule],
  controllers: [],

})
export class AppModule {}
