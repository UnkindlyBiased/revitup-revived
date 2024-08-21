import { validate, ValidationError } from "class-validator"
import { RequestHandler } from "express";
import { plainToInstance } from 'class-transformer'

import { ApiError } from "../error/api.error"

/**
 * Middleware for request body validation
 * 
 * @param type Type for validating the request body
 * @param skipMissingProperties Property for skipping class properties that are not in the request body
 * @returns The next chain function or error
 */
export function validationMiddleware<T>(type: any, skipMissingProperties = false): RequestHandler {
    return (req, _, next) => {
        validate(plainToInstance(type, req.body), { skipMissingProperties })
            .then((errors: ValidationError[]) => {
                if (errors.length > 0) {
                    const message = errors.map((error: ValidationError) => Object.values(error.constraints!)).join(', ')
                    next(ApiError.BadRequest(message))
                } else {
                    next()
                }
            })
    }
}