import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Users } from 'src/workers/workers.service';
import { WorkersService } from 'src/workers/workers.service';


@Injectable()
export class AuthService {
  constructor(private workersService: WorkersService) {}

  async SignIn(username :string, password :string):Promise<Users>{
    const user = await this.workersService.findone(username) 
    if (user?.password !== password){
        throw new UnauthorizedException();
    }
    const {password: userPassword, ...result} = user
    return  result
  }
}
