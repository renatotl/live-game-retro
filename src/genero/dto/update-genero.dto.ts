import { PartialType } from '@nestjs/swagger';
import { CreateGeneroDto } from './create-genero.dto';

export class UpdateGeneroDto extends PartialType(CreateGeneroDto) {}
