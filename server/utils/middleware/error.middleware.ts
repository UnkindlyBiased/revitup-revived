import { NextFunction, Request, Response } from "express";

import { ApiError } from "../error/api.error";
import { HttpErrorCodes } from "../enum/http-error-codes.enum";

export function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
    console.log(err)
    if (err instanceof ApiError) {
        return res.status(err.code).send({
            code: err.code,
            message: err.message,
        })
    }

    return res.status(HttpErrorCodes.BAD_REQUEST).send({
        code: HttpErrorCodes.BAD_REQUEST,
        message: 'Internal error'
    })
}