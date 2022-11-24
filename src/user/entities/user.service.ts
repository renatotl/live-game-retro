import { UserDto } from '../service/dto/userInput';
import { IUserEntity } from './user.entity';
import { randomUUID } from 'node:crypto';
import { PartialUserDto } from '../service/dto/partialUserInput.Dto';
export class UserService {
  private users: IUserEntity[] = []; // uma lista e iniciand como vazio
  // para criar um usuário vou precisar receber um user e vamos retornar uma promise da entitade que criamos
  async createUser(user: UserDto): Promise<IUserEntity> {
    // retorna 1 usuário

    // recebe tudo do user mais um id gerado pelo node
    const userEntity = { ...user, id: randomUUID() };
    this.users.push(userEntity); // recebe o user como parametro e coloca na lista users
    return userEntity;

    //return Promise.revolce(userEntity)  outra forma de fazer caso eu não tenha o async em cima
  }

  async getUserById(userId: string): Promise<IUserEntity>{
    const existUser = this.users.find((user) => user.id === userId)
    if(!existUser){
      throw new Error("User não encontrado")
    }
    return existUser
  }

  async updateUser(userData: PartialUserDto): Promise<IUserEntity> {
    // retorna 1 usuário

    // faz um map em users ( usuário criado)
    this.users.map((user, index) => {
      // pegando o user eo index
      // user.id que o map passou for exatamente igual a userData.id
      if (user.id === userData.id) {
        /// o usuário atualizado vai receber um user só
        const updatedUser = Object.assign(user, userData); // nosso taget ou auvo é "user" o que ele vai buscar no user e alterar o userData/ então os dados que vier do meu userData vou alterar do usuário/ retorna um objeto alterado

        // depois de pegar o user e index vamon interar nessa lista
        this.users.splice(index, 1, updatedUser); // index é a posição inicial, quantos elementos vou remover no caso é 1/ o que vou colocar no lugar? o próprio objeto atualizao o updatedUser
      }
    });
    // retonra esse cara
    const updatedUser = this.users.find((user) => user.id === userData.id);
    return updatedUser;
  }

  /// Promise<IUserEntity[] como eu quero mais de um usuário vou receber uma lista de users
  async getAllUsers(): Promise<IUserEntity[]> {
    return this.users;
  }

  // deletar um usuário
  async deleteUserById(userId: string): Promise<Boolean> {
    const existUser = this.users.find((user) => user.id === userId);
    if (!existUser) {
      return false;
    }
    this.users.map((user, index) => {
      if (user.id === userId) {
        this.users.splice(index, 1);
      }
    });
    return true;
  }
}

// foi feito uma interface IUserEntity, mas o usuário não pode criar o próprio id
// foi feito um class UserDto sem o id e importado pra cá
// foi importado o f=gerador de id do node
// foi juntado tudo na const userEntity e mandado para IUserEntity no createUser
