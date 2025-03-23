import { createContext, useReducer, ReactNode } from 'react';
import Task from '../models/Task';
import tasksReducer from '../reducers/tasksReducer';

const initialTasks: Task[] = [
	{ _id: '1', name: 'Task 1', isComplete: false },
	{ _id: '2', name: 'Task 2', isComplete: true },
	{ _id: '3', name: 'Task 3', isComplete: false },
];

export const ToDoListContext = createContext<Task[] | null>(null);
export const ToDoListDispatchContext = createContext<React.Dispatch<any> | null>(null);

export const ToDoListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
	return(
		<ToDoListContext.Provider value={tasks}>
			<ToDoListDispatchContext.Provider value={dispatch}>
				{children}
			</ToDoListDispatchContext.Provider>
		</ToDoListContext.Provider>
	);
};