import dbo from "../shared/dbo";
import Task from "../entities/task";
import { ObjectId } from "mongodb";

const databaseName = "mern-todo";
const collectionName = "task";

export const getAllTasks = async () => {
	return dbo.getAll(databaseName, collectionName);
}

export const insertTask = async (task: Task) => {
	return dbo.insertOne(databaseName, collectionName, task);
}

export const deleteTask = async (_id: ObjectId) => {
	return dbo.deleteOne(databaseName, collectionName, _id);
}

export const updateTask = async (_id: ObjectId, task: Task) => {
	return dbo.updateOne(databaseName, collectionName, _id, task);
}