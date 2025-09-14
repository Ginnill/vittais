import { UserRepository } from "../../domain/users/user.repository";
import { Injectable } from "@nestjs/common";
import { User } from "src/domain/users/user.entity";
import { PrismaService } from "src/infra/prisma/prisma.service";


@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(name: string, email: string): Promise<any> {
        await this.prisma.user.create({
            data: {
                name,
                email,
            },
        });
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where: { email },
        });
        return user;
    }

    async findById(id: number): Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        return user;
    }

    async findAll(): Promise<User[]> {
        const users = await this.prisma.user.findMany();
        return users;
    }

    async delete(id: number): Promise<void> {
        await this.prisma.user.delete({
            where: { id },
        });
    }
}