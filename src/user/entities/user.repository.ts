import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IUserEntity } from '../entities/user.entity';
import { PartialUserDto } from '../service/dto/partialUserInput.Dto';

// como vamos usar ele em outro lugar então vamos colocar o Injectable, um exemplo nos o colocamos no module
@Injectable()
export class UserRepository {
  // se eu precisar trocar o prisma só trocar o cara do constructor
  constructor(private readonly prisma: PrismaService) {}

  async createUser(user: IUserEntity): Promise<IUserEntity> {
    //para criar precisamos passar parametros
    const CreatedUser = await this.prisma.user.create({ data: user });
    return CreatedUser;
  }

  async updateUser(user: PartialUserDto): Promise<IUserEntity> {
    // preciso saber o cara cara e onde
    const UpdatedUser = await this.prisma.user.update({
      where: { id: user.id },
      data: user,
    });
    return UpdatedUser;
  }

  async deleteUser(id: string): Promise<IUserEntity> {
    const deletedUser = await this.prisma.user.delete({
      where: { id: id },
    });
    return deletedUser;
  }

  async findAllUsers(): Promise<IUserEntity[]> {
    const allUsers = await this.prisma.user.findMany();
    return allUsers;
  }

  async findUserById(id: string): Promise<IUserEntity> {
    const foundUser = await this.prisma.user.findUniqueOrThrow({
      // onde
      where: { id: id },
    });

    return foundUser;
  }
}

// single responsability principal/ atribuindo para uma class só a responsabilidade de lidar com o banco
