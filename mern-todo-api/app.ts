import express from 'express';
import toDoRouter from './route/task';

const app = express();
const port = 3000;

app.use(toDoRouter);

import dbo from './shared/dbo';

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  try {
	dbo.connectToDatabase();
  } catch (err) {
	console.error(err);
  }
});
