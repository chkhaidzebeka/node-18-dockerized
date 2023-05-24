import express, { Response } from 'express';

/** IMPORT ROUTES */
import { ping } from './ping/index.js';
import { setXPoeweredByHeader } from '../util/router/index.js';
import { users } from './users/index.js';

const router = express.Router();

/** REGISTER CUSTOM HEADERS */
router.use(setXPoeweredByHeader)


/** REGISTER ROUTES */
router.use('/ping', ping);
router.use('/users', users)


/** HANDLE 404 */
router.use('*', (_, res: Response) => {
    res.sendStatus(404)
})

export { router as routes }