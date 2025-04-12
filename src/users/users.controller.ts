import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}
  @Get()
  findAll(@Query('role') role?: 'user' | 'moderator' | 'admin' | 'editor') {
    return this.userService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post()
  create(@Body() user: {firstname :string,lastname :string, email :string, role :"Moderator"| "user" | "editor"|"admin" }) {
    return this.userService.create(user);
  }
  @Patch(':id')
  updateuser(@Param('id') id: string, @Body() update:{firstname?:string,lastname?:string, email?:string, role?:"Moderator"| "user" | "editor"|"admin" }) {
    return {
      Message: `user id ${id} updated`,
      updatedata: this.userService.updateuse(+id, update),
    };
  }
  @Delete(':id')
  Deleteuser(@Param('id') id: string) {
    return this.userService.Delete(+id);
  }
}
