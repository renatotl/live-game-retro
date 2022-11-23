import { gameDto } from "../service/dto/gameInput";


export interface IGames extends gameDto {
  id: string;// eu tinha começado com number. mas deu erro. imagino que o randoUUID deve só aceitar string

}
