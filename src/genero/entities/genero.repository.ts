import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service"
import { PartialGeneroDto } from "../dto/update-genero.dto";
import { IGeneroEntity } from "./genero.entity";

@Injectable()
export class GeneroRepository {

    constructor( private readonly primsa: PrismaService){}

    async createGenero(genero:IGeneroEntity): Promise<IGeneroEntity>{
      const createdGenero = await this.primsa.genero.create({data: genero})
      return createdGenero
    }
   
    async updateGenero(genero: PartialGeneroDto): Promise<IGeneroEntity>{
     const updatedGenero = await this.primsa.genero.update({
      // meu id vai der igual ao id do banco
        where: {id: genero.id},
        data: genero
     })
     return updatedGenero
    }

async deleteGenero(id: string): Promise<IGeneroEntity>{
    const deletedGenero = await this.primsa.genero.delete({
        where: { id: id}
    })
    return deletedGenero
}

async getAllGeneros(): Promise<IGeneroEntity[]>{
  return await this.primsa.genero.findMany()
}

async findGeneroById(id:string): Promise<IGeneroEntity>{
   const foundGenero = await this.primsa.genero.findUniqueOrThrow({
    // onde
    where: { id: id },
  });
return foundGenero
}
}