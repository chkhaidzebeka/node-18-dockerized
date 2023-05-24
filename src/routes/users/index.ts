import express, { Request, Response } from 'express';

const router = express.Router();

router.get(
  '/',
    (req: Request, res: Response) => {
        res.json({ "msg": "GET /users" })
    }
);


router.post('/', (req: Request, res: Response) => {
    res.json({ "msg": "POST /users" })
})


export { router as users }