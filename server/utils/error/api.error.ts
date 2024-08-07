import { HttpErrorCodes } from "../enum/http-error-codes.enum"

export class ApiError extends Error {
    readonly message: string
    readonly code: number

    constructor(message: string, code: number) {
        super(message)

        this.code = code
    }

    static BadRequest(message: string) {
        return new ApiError(message, HttpErrorCodes.BAD_REQUEST)
    }
}