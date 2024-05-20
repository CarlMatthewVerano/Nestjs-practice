import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

// Decorators are thing with '@' symbol,
// it abstracts the some of the logic and makes it easier to use
@Controller('users') // /users
export class UsersController {

    // Note that the methods like "findAll", "findOne", "create", "update"
    // are just conventional names and can be named anything. The decorators
    // are what makes them special and tells NestJS what they are supposed to do.

    @Get() // GET /users or /users?role=value
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return [];
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
        return {id};
    }

    @Post() // POST /users
    create(@Body() user: {}) {
        return user;
    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id') id: string, @Body() userUpdate: {}) {
        return {id, ...userUpdate};
    }

    @Delete(':id') // DELETE /users/:id
    delete(@Param('id') id: string) {
        return {id};
    }
}
