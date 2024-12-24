import { describe, expect, test } from '@jest/globals';
import { ObjectId } from 'mongodb';
import { getTodoList, insertTask, deleteTask, updateTask } from './taskRepository'
import dbo from '../db/dbo';
import { Task } from '../entities/task';

jest.mock('../db/dbo');

describe('taskRepository', () => {
	test('getTodoList', async () => {
		await getTodoList();
		expect(dbo.getAll).toBeCalledTimes(1);
		expect(dbo.getAll).toBeCalledWith('mern-todo', 'task');
	});
	test('insertTask', async () => {
		const task: Task = { name: 'task', isComplete: false };
		await insertTask(task);
		expect(dbo.insertOne).toBeCalledTimes(1);
		expect(dbo.insertOne).toBeCalledWith('mern-todo', 'task', task);
	});
	test('deleteTask', async () => {
		const _id = new ObjectId();
		await deleteTask(_id);
		expect(dbo.deleteOne).toBeCalledTimes(1);
		expect(dbo.deleteOne).toBeCalledWith('mern-todo', 'task', _id);
	});
	test('updateTask', async () => {
		const _id = new ObjectId();
		const task: Task = { name: 'task', isComplete: false };
		await updateTask(_id, task);
		expect(dbo.updateOne).toBeCalledTimes(1);
		expect(dbo.updateOne).toBeCalledWith('mern-todo', 'task', _id, task);
	});
});