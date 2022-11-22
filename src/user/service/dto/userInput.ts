// DTO = data trasport object

export class UserDto {
   // só não tem o id


    name: string;
    email: string;
    password: string;
    cpf: string; // cpf só pode ser string / existe CPF que tem o 0 na frente e o banco desconsidera esse cara!
    role: string;
}