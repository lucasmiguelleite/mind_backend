import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) { }
  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.userRepository.findByEmail(createUserDto.email)
    if (existingUser) {
      throw new Error('Usuário já existe');
    }

    const hash = await bcrypt.hash(createUserDto.password, 10);
    return this.userRepository.create({
      name: createUserDto.name,
      email: createUserDto.email,
      password: hash,
    });
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      return null;
    }

    return user;
  }
}
