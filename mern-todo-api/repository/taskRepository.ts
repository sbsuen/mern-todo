import { getAll, insertOne, deleteOne, updateOne } from "../db/dbo";
import { Task } from "../entities/task";
import { ObjectId } from "mongodb";

const databaseName = "mern-todo";
const collectionName = "task";

export const getTodoList = async () => {
	return getAll(databaseName, collectionName);
}

export const insertTask = async (task: Task) => {
	return insertOne(databaseName, collectionName, task);
}

export const deleteTask = async (_id: ObjectId) => {
	return deleteOne(databaseName, collectionName, _id);
}

export const updateTask = async (_id: ObjectId, task: Task) => {
	return updateOne(databaseName, collectionName, _id, task);
}