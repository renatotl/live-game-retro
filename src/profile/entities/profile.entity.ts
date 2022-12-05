import { CreateProfileDto } from "../dto/create-profile.dto"

export interface IProfileEntity extends CreateProfileDto {
    id:string
}
