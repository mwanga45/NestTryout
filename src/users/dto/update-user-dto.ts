import { CreateuserDto } from './create-user-dto';
import { PartialType } from '@nestjs/mapped-types';

export class Updateusers extends PartialType(CreateuserDto){}