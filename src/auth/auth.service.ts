// auth.service.ts

import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  private readonly users: User[];

  constructor() {
    this.users = [
      // Mock users, you will need to implement your actual user retrieval logic here
      { id: 1, username: 'user1', password: 'password1' },
      { id: 2, username: 'user2', password: 'password2' },
    ];
  }

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = this.users.find(user => user.username === username);
    if (user && await compare(password, user.password)) {
      return user;
    }
    return null;
  }
}
