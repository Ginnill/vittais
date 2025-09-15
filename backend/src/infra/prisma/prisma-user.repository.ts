import { UserRepository } from "../../domain/users/user.repository";
import { Injectable } from "@nestjs/common";
import { User } from "src/domain/users/user.entity";
import { PrismaService } from "src/infra/prisma/prisma.service";


@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(name: string, email: string): Promise<User> {
        const user = await this.prisma.user.create({
            data: {
                name,
                email,
            },
        });
        return new User(user.id, user.name, user.email, user.createdAt, user.updatedAt);
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where: { email },
        });
        if (!user) return null;
        return new User(user.id, user.name, user.email, user.createdAt, user.updatedAt);
    }

    async findById(id: number): Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!user) return null;
        return new User(user.id, user.name, user.email, user.createdAt, user.updatedAt);
    }

    async findAll(): Promise<User[]> {
        const users = await this.prisma.user.findMany();
        return users.map(user => new User(user.id, user.name, user.email, user.createdAt, user.updatedAt));
    }

    async delete(id: number): Promise<void> {
        await this.prisma.user.delete({
            where: { id },
        });
    }
}