import { IsString } from "class-validator"

export class MicropostParams {
    micropost: CreateMicropostDto
}

export class CreateMicropostDto {
    @IsString()
    content: string
}