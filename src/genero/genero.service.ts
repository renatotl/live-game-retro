import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { PartialGeneroDto } from './dto/update-genero.dto';
import { IGeneroEntity } from './entities/genero.entity';
import { GeneroRepository } from './entities/genero.repository';

@Injectable()
export class GeneroService {

  // trazendo o user repository pra cá com todas as funções do banco
  constructor(private readonly generoRepository: GeneroRepository) {}

 async create(genero: CreateGeneroDto): Promise<IGeneroEntity> {
      // recebe tudo do user mais um id gerado pelo node
      const generoEntity = { ...genero, id: randomUUID() };// createAt: Date.now()// essa função vem do schema.prisma e retorna quando foi criado
      if (!genero.title){
        throw new Error('Preencha o título');
      }
      const createdGenero = await this.generoRepository.createGenero(generoEntity);
      return createdGenero;
  }

 async findAll(): Promise<IGeneroEntity[]> {
    const value = await this.generoRepository.getAllGeneros()

    if (value.length < 1) {
      throw new Error('Não existe géneros cadastrados!');
    }
    return await this.generoRepository.getAllGeneros();  }



 async findOne(generoId: string): Promise<IGeneroEntity>{
    const foundGenero = await this.generoRepository.findGeneroById(generoId);
    if(!foundGenero){
      throw new Error("Género não encontrado")
    }
    return foundGenero;
  }

 async update(generoData: PartialGeneroDto): Promise<IGeneroEntity> {
    await this.generoRepository.findGeneroById(generoData.id)
    const updatedGenero = await this.generoRepository.updateGenero(generoData);
    if (!updatedGenero.id ) {
      throw new Error('Id inválido!');
      }
    return updatedGenero;
  }

 async remove(generoId: string): Promise<boolean>{
    try {
      await this.generoRepository.findGeneroById(generoId)
      
      await this.generoRepository.deleteGenero(generoId);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }  }
}
