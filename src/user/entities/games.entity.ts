import { GameDto } from "../service/dto/gameInput";


export interface IGames extends GameDto {
  id: string;// eu tinha começado com number. mas deu erro. imagino que o randoUUID deve só aceitar string

}
