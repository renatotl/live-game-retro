import { gameDto } from '../service/dto/gameInput';
import { IGames } from './games.entity';
import { randomUUID } from 'crypto';

export class GameService {
  private games: IGames[] = []; // uma lista e iniciand como vazio

  async createGame(game: gameDto): Promise<IGames> {
    const gameEntity = { ...game, id: randomUUID() };
    this.games.push(gameEntity);
    return gameEntity;
  }
}
