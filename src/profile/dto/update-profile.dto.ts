import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateProfileDto } from './create-profile.dto';

export class PartialProfileDto extends PartialType(CreateProfileDto) {
    @ApiProperty()
    @IsString()
    id: string
}
