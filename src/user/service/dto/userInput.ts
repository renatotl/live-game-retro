// DTO = data trasport object


import { ApiProperty } from "@nestjs/swagger"// yarn add @nestjs/swagger

export class UserDto {
   // só não tem o id

   @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    cpf: string; // cpf só pode ser string / existe CPF que tem o 0 na frente e o banco desconsidera esse cara!
    @ApiProperty()
    role: string;
}