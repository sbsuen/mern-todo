import express, { Request, Response } from 'express';
import toDoRouter from './route/task';

const app = express();
const port = 3000;

app.use(toDoRouter);

import { connectToDatabase } from './db/dbo';

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  connectToDatabase();
});
