import { UserDto } from "../service/dto/userInput";
import { IUserEntity } from "./user.entity";
import { randomUUID
 } from "node:crypto";
export class UserService {

    private users: IUserEntity[] = []// uma lista e iniciand como vazio
    // para criar um usuário vou precisar receber um user e vamos retornar uma promise da entitade que criamos 
  async createUser(user: UserDto): Promise<IUserEntity> {
// recebe tudo do user mais um id gerado pelo node
    const userEntity = {...user, id: randomUUID()}
   this.users. push(userEntity)// recebe o user como parametro e coloca na lista users
   return userEntity

   //return Promise.revolce(userEntity)  outra forma de fazer caso eu não tenha o async em cima
   }

   async updateUser(user: UserDto): Promise<IUserEntity> {
    
   }
}

// foi feito uma interface IUserEntity, mas o usuário não pode criar o próprio id
// foi feito um class UserDto sem o id e importado pra cá
// foi importado o f=gerador de id do node
// foi juntado tudo na const userEntity e mandado para IUserEntity no createUser