export abstract class UsersRepository {
    abstract create(name: string, email: string, password: string): Promise<void>;
}