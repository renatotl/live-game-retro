import { PartialType } from '@nestjs/swagger';
import { CreateGeneroDto } from './create-genero.dto';

export class PartialGeneroDto extends PartialType(CreateGeneroDto) {
    id: string;
}
