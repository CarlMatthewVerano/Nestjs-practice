import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

// Decorators are thing with '@' symbol,
// it abstracts the some of the logic and makes it easier to use
@Controller('users') // /users
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    // Note that the methods like "findAll", "findOne", "create", "update"
    // are just conventional names and can be named anything. The decorators
    // are what makes them special and tells NestJS what they are supposed to do.

    @Get() // GET /users or /users?role=value
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        
        return this.usersService.findAll(role);
    }

   // This is an example; if this was placed after the id route
   // then it would not be reachable and any value passed to it
   // would be treated as an id. This is because the route is
   // matched from top to bottom. But if placed before, it would
   // be reachable and the id route would be reachable.
//    @Get('interns')
//    findAllInterns() {
//        return [];
//    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id') id: string) {
        //@Param decorator alwasys returns a string
        //The + sign is used to convert the string to a number (unary, forced conversion)
        return this.usersService.findOne(+id);
    }

    @Post() // POST /users
    create(@Body() user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        return this.usersService.create(user);
    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id') id: string, @Body() userUpdate: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        return this.usersService.update(+id, userUpdate);
    }

    @Delete(':id') // DELETE /users/:id
    delete(@Param('id') id: string) {
        return this.usersService.delete(+id);
    }
}
