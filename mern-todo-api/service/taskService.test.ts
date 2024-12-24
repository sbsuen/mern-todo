import { describe, expect, test } from '@jest/globals';
import { ObjectId } from 'mongodb';
import * as repository from '../repository/taskRepository';
import * as dataService from './taskService';
import { Task } from '../entities/task';

jest.mock('../repository/taskRepository');

describe('taskService', () => {
	test('getTodoList', async () => {
		await dataService.getTodoList();
		expect(repository.getTodoList).toBeCalledTimes(1);
	});
	test('addTask', async () => {
		const name = 'task';
		const expected = { name, isComplete: false };
		
		await dataService.addTask(name);
		expect(repository.insertTask).toBeCalledTimes(1);
		expect(repository.insertTask).toBeCalledWith(expected);
	});
	test('deleteTask', async () => {
		const id = '123456789012345678901234';
		const _id = new ObjectId(id);

		await dataService.deleteTask(id);
		expect(repository.deleteTask).toBeCalledTimes(1);
		expect(repository.deleteTask).toBeCalledWith(_id);
	});
	test('updateTask', async () => {
		const id = '123456789012345678901234';
		const _id = new ObjectId(id);
		const name = 'task';
		const isComplete = 'false';
		const expected: Task = { name, isComplete: false };

		await dataService.updateTask(id, name, isComplete);
		expect(repository.updateTask).toBeCalledTimes(1);
		expect(repository.updateTask).toBeCalledWith(_id, expected);
	});
});