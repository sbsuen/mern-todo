import express, { Request, Response } from 'express';
import { Task } from '../entities/task';
import { getTodoList, insertTask, deleteTask, updateTask } from '../repository/taskRepository';
import { ObjectId } from 'mongodb';

const router = express.Router();

//Get All
router.get('/getTodoList', async (req: Request, res: Response) => {
	getTodoList().then((todos) => {
		res.send(todos);
	}).catch((err) => {	
		res.status(500);
		res.json({ message: 'Could not retrieve information from server'});
	});
});

//Insert
router.post('/addTask/:name', async (req: Request, res: Response) => {
	const task: Task = {
		name: req.params.name,
		isComplete: false
	};
	insertTask(task).then((result) => {
		res.send(result);
	}).catch((err) => {	
		console.error(err);
		res.status(500);
		res.json({ message: 'Failed to add task'});
	});
});

//Delete
router.delete('/deleteTask/:id', async (req: Request, res: Response) => {
	const _id = new ObjectId(req.params.id);
	deleteTask(_id).then((result) => {
		res.send(result);
	}).catch((err) => {	
		console.error(err);
		res.status(500);
		res.json({ message: 'Failed to delete task'});
	});
});

//Update
router.post('/updateTask/:id/:name/:isComplete', async (req: Request, res: Response) => {
	const task: Task = {
		name: req.params.name,
		isComplete: req.params.isComplete === 'true' ? true : false
	};
	const _id = new ObjectId(req.params.id);
	updateTask(_id, task).then((result) => {
		res.send(result);
	}).catch((err) => {	
		console.error(err);
		res.status(500);
		res.json({ message: 'Failed to update task'});
	});
});

export default router;