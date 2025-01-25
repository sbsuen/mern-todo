import { ObjectId } from 'mongodb';

export default interface Task {
	_id?: ObjectId;
	name: string;
	isComplete: boolean;
}
