import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  HttpStatus
} from '@nestjs/common';
import { CreateuserDto } from './dto/create-user-dto';
import { Updateusers } from './dto/update-user-dto';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}
  @Get()
  findAll(@Query('role') role?: 'user' | 'moderator' | 'admin' | 'editor') {
    return this.userService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createuserDto:CreateuserDto){
    return this.userService.create(createuserDto);
  }
  @Patch(':id')
  updateuser(@Param('id', new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number, @Body() updateusers:Updateusers ){
    return {
      Message: `user id ${id} updated`,
      updatedata: this.userService.updateuse(id, updateusers),
    };
  }
  @Delete(':id')
  Deleteuser(@Param('id', new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number) {
    return this.userService.Delete(id);
  }
}
