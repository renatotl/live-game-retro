import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { PrismaService } from 'src/prisma/prisma.service';
  import { LoginResponseDto } from './dto/loggin-response.dto';
  import { LoginDto } from './dto/loggin.dto';
  import * as bcrypt from 'bcrypt'; //npm i bcrypt / npm i -D @types/bcrypt
  
  @Injectable()
  export class AuthService {
    constructor(
      private prismaService: PrismaService,
      private jwtService: JwtService,
    ) {}
  
    async login(data: LoginDto): Promise<LoginResponseDto> {
      const { email, password } = data;// descontruimos
  
      const userExists = await this.prismaService.user.findUnique({
        where: { email },
      });
  
      console.log(userExists)
      if (!userExists) {
        throw new NotFoundException('Credenciais inválidas 1');
      }
  
      // o compare é um método do bcrypt
      const isHashValid = await bcrypt.compare(password, userExists.password);
      console.log(isHashValid)
  
      if (!isHashValid) {
        throw new UnauthorizedException('Credenciais inválidas 2');
      }
  
      delete userExists.password;// na hora do retorno ele não traz a senha
  
      return {
        token: this.jwtService.sign({ email }),// asina o token com o email que estamos passando
        user: userExists,// retorna o usuário
      };
    }
  }