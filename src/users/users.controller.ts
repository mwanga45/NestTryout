import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(){
       return []
    }

    @Get('intern')
    findIntern(){
        return []
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return{id}
    }
    
    @Post()
    create(@Body() user: {}){
      return user 
    }   
    @Patch(':id')
    updateuser(@Param('id') id: string ,@Body() update:any){
        return{
            Message:`user id ${id} updated`,
            updatedata:update
        }
    }                    
}
