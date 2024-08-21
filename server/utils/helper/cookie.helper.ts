import { Response } from "express";

export class CookieHelper {
    static setCookie(key: string, value: string | number, res: Response) {
        res.cookie(key, value, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
            sameSite: false
        });
    }
    static clearCookie(key: string, res: Response) {
        res.clearCookie(key)
    }
}