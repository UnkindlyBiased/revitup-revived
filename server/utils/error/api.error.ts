import { HttpErrorCodes } from "../enum/http-error-codes.enum"

/**
 * Extended error class, including error code and static errors for any cases
 * 
 * @extends Error
 */
export class ApiError extends Error {
    readonly message: string
    readonly code: number

    /**
     * 
     * @param message The message of the error
     * @param code The error code
     */
    constructor(message: string, code: number) {
        super(message)

        this.code = code
    }

    static BadRequest(message: string) {
        return new ApiError(message, HttpErrorCodes.BAD_REQUEST)
    }
    static Unauthorized(message: string) {
        return new ApiError(message, HttpErrorCodes.UNAUTHORIZED)
    }
    static Forbidden(message: string) {
        return new ApiError(message, HttpErrorCodes.FORBIDDEN)
    }
    static NotFound(message: string) {
        return new ApiError(message, HttpErrorCodes.NOT_FOUND)
    }
    static Conflict(message: string) {
        return new ApiError(message, HttpErrorCodes.CONFLICT)
    }
}