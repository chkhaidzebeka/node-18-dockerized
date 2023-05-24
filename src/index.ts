/** IMPORT CORE MODULES */
import express from 'express';
import { routes } from './routes/index.js';

const app = express()
const port = process.env.PORT;


app.use('/', routes);


app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`)
})