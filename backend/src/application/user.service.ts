import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/domain/users/user.repository";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    async createUser(name: string, email: string) {
        if (!email.includes("@")) {
            throw new Error("Invalid email");
        }

        const existing = await this.userRepository.findByEmail(email);
        if (existing) {
            throw new Error("Email already in use");
        }

        return this.userRepository.create(name, email);
    }
}