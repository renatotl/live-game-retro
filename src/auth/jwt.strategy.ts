import { ExtractJwt, Strategy } from 'passport-jwt';//npm install --save-dev @types/passport-jwt
import { PassportStrategy } from '@nestjs/passport';//$ npm install --save @nestjs/passport passport passport-local

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prismaService: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { email: string }) {
    const userExists = await this.prismaService.user.findUnique({
      where: { email: payload.email },
    });

    if (!userExists) {
      throw new NotFoundException('Usuário não existe ou não está autenticado');
    }

    delete userExists.password;

    return userExists;
  }
}