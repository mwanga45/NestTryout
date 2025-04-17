import { Body, Module, Post } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { WorkersModule } from 'src/workers/workers.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[WorkersModule]
})
export class AuthModule {
}
