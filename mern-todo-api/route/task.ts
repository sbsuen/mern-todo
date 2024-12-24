import express, { Request, Response } from 'express';
import * as dataService from '../service/taskService';

const router = express.Router();

//Get All
router.get('/getTodoList', async (req: Request, res: Response) => {
	dataService.getTodoList().then((todos) => {
		res.send(todos);
	}).catch((err) => {	
		res.status(500);
		res.json({ message: 'Could not retrieve information from server'});
	});
});

//Insert
router.post('/addTask/:name', async (req: Request, res: Response) => {
	const name = req.params.name;
	dataService.addTask(name).then((result) => {
		res.send(result);
	}).catch((err) => {	
		console.error(err);
		res.status(500);
		res.json({ message: 'Failed to add task'});
	});
});

//Delete
router.delete('/deleteTask/:id', async (req: Request, res: Response) => {
	const id = req.params.id;
	dataService.deleteTask(id).then((result) => {
		res.send(result);
	}).catch((err) => {	
		console.error(err);
		res.status(500);
		res.json({ message: 'Failed to delete task'});
	});
});

//Update
router.post('/updateTask/:id/:name/:isComplete', async (req: Request, res: Response) => {
	const { id, name, isComplete } = req.params;
	dataService.updateTask(id, name, isComplete).then((result) => {
		res.send(result);
	}).catch((err) => {	
		console.error(err);
		res.status(500);
		res.json({ message: 'Failed to update task'});
	});
});

export default router;