import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

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
    findOneUser(@Param('id')id:String){
        return this.usersService.findOneUser(+id)
    }

    // POST /users
    @Post()
    createUser(@Body() user:{name:string, email:string, role:'INTERN' | 'ENGINEER' | 'ADMIN'}){
        return this.usersService.createUser(user)
    }

    // PATCH /users/:id
    @Patch(':id')
    updateUser(@Param('id')id:String,@Body()userUpdate:{name?:string, email?:string, role?:'INTERN' | 'ENGINEER' | 'ADMIN'}){
        return this.usersService.updateUser(+id,userUpdate)
    }

    // DELETE /users/:id
    @Delete(':id')
    deleteUser(@Param('id')id:String){
        return this.usersService.deleteUser(+id)
    }
}
