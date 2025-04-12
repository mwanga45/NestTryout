import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      firstname: 'Issa',
      lastname: 'Mwanga',
      email: 'issamwanga@gmail.com',
      role: 'admin',
    },
    {
      firstname: 'Amina',
      lastname: 'Juma',
      email: 'amina.juma@example.com',
      role: 'user',
    },
    {
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      role: 'editor',
    },
    {
      firstname: 'Fatima',
      lastname: 'Salim',
      email: 'fatima.salim@example.com',
      role: 'user',
    },
    {
      firstname: 'Ali',
      lastname: 'Bakari',
      email: 'ali.bakari@example.com',
      role: 'moderator',
    },
    {
      firstname: 'Grace',
      lastname: 'Njeri',
      email: 'grace.njeri@example.com',
      role: 'user',
    },
    {
      firstname: 'Samuel',
      lastname: 'Kato',
      email: 'samuel.kato@example.com',
      role: 'admin',
    },
    {
      firstname: 'Zainab',
      lastname: 'Yusuf',
      email: 'zainab.yusuf@example.com',
      role: 'editor',
    },
    {
      firstname: 'David',
      lastname: 'Mutiso',
      email: 'david.mutiso@example.com',
      role: 'user',
    },
    {
      firstname: 'Rose',
      lastname: 'Mwende',
      email: 'rose.mwende@example.com',
      role: 'moderator',
    },
  ];
}
