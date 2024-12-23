import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';


@Controller('users')
export class UsersController {
    // GET /users or /users?role=value
    @Get()
    findAllUsers(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        return []
    }

    // GET /users/:id
    @Get(':id')
    findOneUser(@Param('id')id:String){
        return {id}
    }

    // POST /users
    @Post()
    createUser(@Body() user:{}){
        return user
    }

    // PATCH /users/:id
    @Patch(':id')
    updateUser(@Param('id')id:String,@Body()userUpdate:{}){
        return {id, ...userUpdate}
    }

    // DELETE /users/:id
    @Delete(':id')
    deleteUser(@Param('id')id:String){
        return {id}
    }
}
