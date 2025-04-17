// import { Injectable } from '@nestjs/common';
// export type Users = any
// @Injectable()
// export class WorkersService {
//          private readonly user=[
//             {
//                 username:"Isack",
//                 password:"1235"
//             },
//             {
//                 username:"Ramadhani",
//                 password:"54321"
//             },
//             {
//                 username:"James",
//                 password:"7890"
//             },
//             {
//                 username:"Mengiseni",
//                 password:"135"
//             },
//             {
//                 username:"Minja",
//                 password:"5678"
//             },
//         ]

//         async findone(username:string) :Promise<Users|undefined>{
//             return  this.user.find(user => user.username === username)
//         }
    
// }

import  {Injectable} from "@nestjs/common"
export type Users  = any

@Injectable()
export class WorkersService{
    private readonly User  =[
        {
            username:"isack",
            password:"123"
        },
        {
            username:"Samweli",
            password:"345"
        },
        {
            username:"Godwin",
            password:"321"
        },
        {
            username:"Mwacha",
            password:"312"
        },
        {
            username:"Minja",
            password:"567"
        },
    ];
    async findOne(username : string):Promise<Users|undefined>{
        return this.User.find(user => user.username === username)
    } 
}
