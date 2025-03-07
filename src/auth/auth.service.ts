import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) { }
  async signIn(email: string, password: string,) {
    const user = await this.userService.findByEmail(email);

    if (!user || !user.senha) {
      throw new UnauthorizedException();
    }

    const verifyPassword = await bcrypt.compare(password, user.senha);

    if (!verifyPassword) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user?.id,
      email: user.email,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }
}
