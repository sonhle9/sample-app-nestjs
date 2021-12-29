import { IsString } from "class-validator"

export class PasswordResetParams {
    password_reset: PasswordResetFields
}

export class PasswordResetFields {
    @IsString()
    email: string
}