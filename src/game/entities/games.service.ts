import { GameDto } from '../../user/service/dto/gameInput';
import { IGamesEntity } from './games.entity';
import { randomUUID } from 'crypto';
import { PartialGameDto } from '../../user/service/dto/partialGameInput.Dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  // n;ao usamos a linha de baixo pois os dados não serma mocados
  // private games: IGamesEntity[] = []; // uma lista e iniciand como vazio

  constructor(private readonly gameRepository: GameRepository) {

  }
  async createGame(game: GameDto): Promise<IGamesEntity> {
    const gameEntity = { ...game, id: randomUUID() };
    if (!game.title || !game.year || !game.coverImageUrl || !game.TrailerYouTubeUrl || !game.ImdbScore || !game.GameplayYouTubeUrl || !game.Description) {
      throw new Error('Prenecha todos os campos. Exemplo: título, ano e decrição.');
    }

    const createGame = await this.gameRepository.creteGame(gameEntity);
    return createGame
    // this.games.push(gameEntity);
    // return gameEntity;
  }


  async getGameById(gameId: string): Promise<IGamesEntity> {
    const foundGame = await this.gameRepository.findUserById(gameId);
    if(!foundGame){
      throw new Error("Game não encontrado")
    }
    return foundGame;
  }


  async updateGame(gameData: PartialGameDto): Promise<IGamesEntity> {
    const gameUpdated = await this.gameRepository.updateGame(gameData);
  if(!gameUpdated){
    throw new Error("Id inválido")
  }

    return gameUpdated

  }

  /* ANTIGO
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

  */

  // deletar um usuário
  //    async deleteGame(gameData:PartialGameDto ): Promise<IGamesEntity> {

  // }


  async getAllGames(): Promise<IGamesEntity[]>{
    const allGames = await this.gameRepository.getAllGames()
    if(allGames.length <1){
      throw new Error("Não existe games registrados")
    }
    return allGames
  }

  async deleteGame(id: string): Promise<boolean> {
    try { 
     await this.gameRepository.deleteGame()
     return true
    }catch (err){
      console.log(err)
      return false
    }
  }

  /* ANTIGO
  async deleteGame(gameData: PartialGameDto) {
    const newId = await this.games.map((game, index) => {
      if (game.id === gameData.id) {
        this.games.splice(index, 1);
        console.log('Apagou!');
      } else {
        console.log('Algo deu errado!');
      }
    });
    return newId;
*/ 
    // primeiro ID é do banco o segundo vem por parametro
    //return await this.games.deleteOne({id: id}).exec()

    // o primeiro parãmetro tira o segundo é a quantidade
    //return await this.games.splice(id, 1 )
  }
//}
