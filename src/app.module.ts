import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { WorkersModule } from './workers/workers.module';

@Module({
  imports: [UsersModule, AuthModule, WorkersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
