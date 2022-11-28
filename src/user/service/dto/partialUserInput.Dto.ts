import { PartialType } from '@nestjs/mapped-types';
import { UserDto } from './userInput';

// faz com que eu reaproveite tudo do meu UserDto, MAS TUDO OPCIONAL/ se vier 2 ok se vier tudo ok tbm
export class PartialUserDto extends PartialType(UserDto) {
  id: string;
}
