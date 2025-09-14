import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "src/application/user.service";
import { CreateUserDto } from "src/domain/users/dto/create-user.dto";


@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post("create")
    async createUser(@Body() body: CreateUserDto) {
        const { name, email } = body;
        await this.userService.createUser(name, email);

        return { message: `User created successfully`, user: { name, email } };
    }
}