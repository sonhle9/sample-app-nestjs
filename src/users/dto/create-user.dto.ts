import { IsString } from "class-validator"

export class UserParams {
    user: UserFields
}

export class UserFields {
    @IsString()
    email: string
    @IsString()
    name: string
    @IsString()
    password: string
    @IsString()
    password_confirmation: string
}