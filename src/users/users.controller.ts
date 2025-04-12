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

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGENEER' | 'DEVELOPER') {
    return [];
  }

  @Get('intern')
  findIntern() {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: {}) {
    return user;
  }
  @Patch(':id')
  updateuser(@Param('id') id: string, @Body() update: any) {
    return {
      Message: `user id ${id} updated`,
      updatedata: { id, ...update },
    };
  }
  @Delete(':id')
  Deleteuser(@Param('id') id: string) {
    return {id};
  }
}
