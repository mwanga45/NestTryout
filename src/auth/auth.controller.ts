import { Controller, Post,Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Authentic } from './dto/aut.dto';
import { Users } from 'src/workers/workers.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post()
    signin(@Body() authentic:Authentic){
      return this.authService.SignIn(authentic.username,authentic.password)
    }       
}
