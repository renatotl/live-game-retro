import { PartialType } from "@nestjs/mapped-types"
import { GameDto } from "./gameInput"


// faz com que eu reaproveite tudo do meu UserDto, MAS TUDO OPCIONAL/ se vier 2 ok se vier tudo ok tbm
export class PartialGameDto extends PartialType(GameDto) {
 id: string
}