import { Injectable } from '@nestjs/common';
export interface Users{
  username:string,
  password?:string
};
// export type Users = any
@Injectable()
export class WorkersService {
  private readonly user = [
    {
      username: 'Isack',
      password: '1235',
    },
    {
      username: 'Ramadhani',
      password: '54321',
    },
    {
      username: 'James',
      password: '7890',
    },
    {
      username: 'Mengiseni',
      password: '135',
    },
    {
      username: 'Minja',
      password: '5678',
    },
  ];

  async findone(username: string): Promise<Users | undefined> {
    return this.user.find((user) => user.username === username);
  }
}