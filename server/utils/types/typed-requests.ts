import { Request } from "express";

export type RequestWithBody<T> = Request<Record<string, any>, Record<string, any>, T>
export type RequestWithQuery<T> = Request<Record<string, any>, Record<string, any>, Record<string, any>, T>
export type RequestWithParams<T> = Request<T>