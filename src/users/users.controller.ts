import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService:UsersService){}

    // GET /users or /users?role=value
    @Get()
    findAllUsers(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        return this.usersService.findAllUsers(role)
    }

    // GET /users/:id
    @Get(':id')
    findOneUser(@Param('id', ParseIntPipe)id:number){
        return this.usersService.findOneUser(id)
    }

    // POST /users
    @Post()
    createUser(@Body(ValidationPipe) createUserDto:CreateUserDto){
        return this.usersService.createUser(createUserDto)
    }

    // PATCH /users/:id
    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe)id:number,@Body(ValidationPipe)updateUserDto:UpdateUserDto){
        return this.usersService.updateUser(id,updateUserDto)
    }

    // DELETE /users/:id
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe)id:number){
        return this.usersService.deleteUser(id)
    }
}
