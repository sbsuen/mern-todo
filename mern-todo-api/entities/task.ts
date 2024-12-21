import { ObjectId } from 'mongodb';

export interface Task {
	_id?: ObjectId;
	name: string;
	isComplete: boolean;
}
