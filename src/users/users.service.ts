import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private Users = [
    {
      id: 1,
      firstname: 'Issa',
      lastname: 'Mwanga',
      email: 'issamwanga@gmail.com',
      role: 'admin',
    },
    {
      id: 2,
      firstname: 'Amina',
      lastname: 'Juma',
      email: 'amina.juma@example.com',
      role: 'user',
    },
    {
      id: 3,
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      role: 'editor',
    },
    {
      id: 4,
      firstname: 'Fatima',
      lastname: 'Salim',
      email: 'fatima.salim@example.com',
      role: 'user',
    },
    {
      id: 5,
      firstname: 'Ali',
      lastname: 'Bakari',
      email: 'ali.bakari@example.com',
      role: 'moderator',
    },
    {
      id: 6,
      firstname: 'Grace',
      lastname: 'Njeri',
      email: 'grace.njeri@example.com',
      role: 'user',
    },
    {
      id: 7,
      firstname: 'Samuel',
      lastname: 'Kato',
      email: 'samuel.kato@example.com',
      role: 'admin',
    },
    {
      id: 8,
      firstname: 'Zainab',
      lastname: 'Yusuf',
      email: 'zainab.yusuf@example.com',
      role: 'editor',
    },
    {
      id: 9,
      firstname: 'David',
      lastname: 'Mutiso',
      email: 'david.mutiso@example.com',
      role: 'user',
    },
    {
      id: 10,
      firstname: 'Rose',
      lastname: 'Mwende',
      email: 'rose.mwende@example.com',
      role: 'moderator',
    },
  ];
  findAll(role?: 'Moderator' | "user" | "editor"|"admin"){
    if (role){
        const user = this.Users.filter(user => user.role === role)
        return user
    }
    return this.Users
  }

  findOne(id:number){
    const user = this.Users.find(user => user.id === id)
    return user
  }
}
