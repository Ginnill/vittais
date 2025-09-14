import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './infra/prisma/prisma.service';
import { UserRepository } from './domain/users/user.repository';
import { PrismaUserRepository } from './infra/prisma/prisma-user.repository';
import { UserController } from './interface/user.controller';
import { UserService } from './application/user.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, PrismaService, UserService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository
    }
  ],
})
export class AppModule { }
