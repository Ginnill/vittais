import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from '../users.repository';
import { Injectable } from '@nestjs/common';


@Injectable()
export class PrismaUsersRepository extends UsersRepository {
    constructor(private prisma: PrismaService) {
        super();
    }

    async create(name: string, email: string, password: string): Promise<void> {
        await this.prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });
    }
}