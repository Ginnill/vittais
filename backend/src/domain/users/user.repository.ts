import { User } from "./user.entity";

export abstract class UserRepository {
    abstract create(name: string, email: string): Promise<User>;
    abstract findByEmail(email: string): Promise<User | null>;
    abstract findById(id: number): Promise<User | null>;
    abstract findAll(): Promise<User[]>;
    abstract delete(id: number): Promise<void>;
}