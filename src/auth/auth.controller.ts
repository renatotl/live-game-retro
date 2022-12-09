import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IUserEntity } from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginResponseDto } from './dto/loggin-response.dto';
import { LoginDto } from './dto/loggin.dto';
import { LoggedUser } from './logged-user.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiOperation({
    summary: 'Fazer login com um usuário e gerar um token',
  })
  login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    return this.authService.login(loginDto);
  }

  @Get()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Mostrar o usuário logado no momento',
  })
  @ApiBearerAuth()
  profile(@LoggedUser() user: IUserEntity): IUserEntity {
    return user;
  }
}