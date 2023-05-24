import { NextFunction, Request, Response } from "express";

export const setXPoeweredByHeader = (
    _: Request,
    res: Response,
    next: NextFunction
) => {
    res.setHeader( 'X-Powered-By', 'CONNECT-API' );

    next()
}