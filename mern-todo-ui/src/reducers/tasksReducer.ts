import Task from "../models/Task";

interface TaskAction {
	type: string;
	payload: string;
}

const tasksReducer = (tasks: Task[], action: TaskAction) => {
	switch(action.type) {
		case 'ADD_TASK':
			return [
				...tasks,
				{
					_id: (tasks.length + 1).toString(),
					name: action.payload,
					isComplete: false,
				}
			];
		case 'TOGGLE_TASK':
			return tasks.map((task) => {
				if (task._id === action.payload) {
					return {
						...task,
						isComplete: !task.isComplete,
					};
				} else {
					return task;
				}
			});
		case 'DELETE_TASK':
			return tasks.filter((task) => task._id !== action.payload);
		default:
			throw Error(`Unknown Action: ${action.type}`);
	}
};

export default tasksReducer