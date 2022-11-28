import { UserDto } from '../service/dto/userInput';

// colocamos o I no nome da nossa interface para indicar que é uma interface
export interface IUserEntity extends UserDto {
  id: string;
  // estou trazendo tudo de UserDto mais ID que está aqui
}

// isAdmin é para bolean

// role/ controle de acesso do usuário e podemos salvar somo string, etc

// ===== começamos pelas entities e depois vamos para o service, dto
