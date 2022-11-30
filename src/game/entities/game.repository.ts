import { Injectable } from "@nestjs/common";
import { PartialGameDto } from "src/user/service/dto/partialGameInput.Dto";
import { IGamesEntity } from "./games.entity";


@Injectable()
export class GameRepository {

    constructor( private readonly primsa: PrismaService){}

    async create(game:IGamesEntity): Promise<IGamesEntity>{
      const createdGame = await this.primsa.game.create({data: game})
      return createdGame
    }

    async updateGame(game: PartialGameDto): Promise<IGamesEntity>{
     const updatedGame = await this.primsa.game.update({
        where: {id: game.id},
        data: game
     })
     return updatedGame
    }

async deleteGame(id: string): Promise<IGamesEntity>{
    const deletedGame = await this.primsa.game.delete({
        where: { id: id}
    })
    return deletedGame
}

async getAllGames(): Promise<IGamesEntity[]>{
  return await this.primsa.game.findMany()
}

async findGameById(id:string): Promise<IGamesEntity>{
   const foundGame = await this.primsa.game.findUniqueOrThrow({
    // onde
    where: { id: id },
  });
return foundGame
}
}