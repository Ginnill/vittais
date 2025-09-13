import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { PrismaUsersRepository } from './users/prisma/prisma-users-repositories';
import { UsersRepository } from './users/users.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, {
    provide: UsersRepository,
    useClass: PrismaUsersRepository,
  }],
})
export class AppModule { }
