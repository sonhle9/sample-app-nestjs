import { Injectable } from '@nestjs/common';
import { UserParams } from './dto/create-user.dto';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john@gmail.com',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  // async index() {
  //   return this.prisma.user.findMany({})
  // }

  async create(userParams: UserParams): Promise<any> {
    // try {
    //   await this.prisma.user.create(
    //   {
    //     data: {
    //       email: userParams.user.email,
    //       name: userParams.user.name,
    //       password_digest: userParams.user.password,
    //     },
    //   });
    //   return { flash: ["info", "Please check your email to activate your account."], user: {} };
    // } catch (e) {
    //   return { errors: e };
    // }
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}