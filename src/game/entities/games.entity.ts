import { GameDto } from '../../user/service/dto/gameInput';

export interface IGamesEntity extends GameDto {
  id: string; // eu tinha começado com number. mas deu erro. imagino que o randoUUID deve só aceitar string
}
