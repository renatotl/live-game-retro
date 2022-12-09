import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@prisma/client';

export const LoggedUser = createParamDecorator((_, ctx: ExecutionContext) => {
    // faz uma requisição pegando tudo que está na página http/ traz um json gigante
  const request = ctx.switchToHttp().getRequest();
  // faz o request e pega só os dados de usuário
  const user = request.user as User;

  delete user.password;

  return user;
});

// retorna o usuário logado

