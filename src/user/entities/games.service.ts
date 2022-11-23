import { GameDto } from '../service/dto/gameInput';
import { IGamesEntity } from './games.entity';
import { randomUUID } from 'crypto';
import { PartialGameDto } from '../service/dto/partialGameInput.Dto';

export class GameService {
  private games: IGamesEntity[] = []; // uma lista e iniciand como vazio

  async createGame(game: GameDto): Promise<IGamesEntity> {
    const gameEntity = { ...game, id: randomUUID() };
    this.games.push(gameEntity);
    return gameEntity;
  }
  async updateGame(gameData: PartialGameDto): Promise<IGamesEntity> {
    // faz um map em users ( usuário criado)
    this.games.map((game, index) => {
      // pegando o user eo index
      // user.id que o map passou for exatamente igual a userData.id
      if (game.id === gameData.id) {
        /// o usuário atualizado vai receber um user só
        const updatedGame = Object.assign(game, gameData); // nosso taget ou auvo é "user" o que ele vai buscar no user e alterar o userData/ então os dados que vier do meu userData vou alterar do usuário/ retorna um objeto alterado

        // depois de pegar o user e index vamon interar nessa lista
        this.games.splice(index, 1, updatedGame); // index é a posição inicial, quantos elementos vou remover no caso é 1/ o que vou colocar no lugar? o próprio objeto atualizao o updatedUser
      }
    });
    // retonra esse cara
    const updatedGame = this.games.find((game) => game.id === gameData.id);
    return updatedGame;
  }

   // deletar um usuário
   async deleteGame(gameData:PartialGameDto ): Promise<IGamesEntity> {
 


}

}


