import { PartialType } from '@nestjs/swagger';
import { CreateProfileDto } from './create-profile.dto';

export class PartialProfileDto extends PartialType(CreateProfileDto) {}
