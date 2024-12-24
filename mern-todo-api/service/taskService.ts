import { ObjectId } from 'mongodb';
import * as repository from '../repository/taskRepository';
import { Task } from '../entities/task';

export async function getTodoList() {
	return repository.getTodoList();
}

export async function addTask(name: string) {
	const task: Task = { name, isComplete: false };
	return repository.insertTask(task);
}

export async function deleteTask(id: string) {
	return repository.deleteTask(new ObjectId(id));
}

export async function updateTask(id: string, name: string, isComplete: string) {
	const task: Task = { 
		name,
		isComplete: isComplete === 'true' ? true : false
	};
	return repository.updateTask(new ObjectId(id), task);
}