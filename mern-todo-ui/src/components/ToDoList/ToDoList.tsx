import { useState, useReducer } from 'react';
import { ToDoListContext, ToDoListDispatchContext } from '../../contexts/ToDoListContext';
import Button from '../Button/Button';
import AddTaskModal from '../AddTaskModal/AddTaskModal';
import TaskList from '../TaskList/TaskList';
import Task from '../../models/Task';
import tasksReducer from '../../reducers/tasksReducer';

const initialTasks: Task[] = [
	{ _id: '1', name: 'Task 1', isComplete: false },
	{ _id: '2', name: 'Task 2', isComplete: true },
	{ _id: '3', name: 'Task 3', isComplete: false },
];

const ToDoList: React.FC<any> = (props) => {
	const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

	const handleAddTask = (taskName: string) => {
		dispatch({ type: 'ADD_TASK', payload: taskName });
	};

	return (
		<ToDoListContext.Provider value={tasks}>
			<ToDoListDispatchContext.Provider value={dispatch}>
				<div className="container">
					<div className="row">
						<h1 className='text-center mt-5 mb-3'>My Todo List</h1>
					</div>
					<hr />
					<div className="row justify-content-center">
						<div className='col-auto'>
							<Button
								label="Add Task"
								modalId='addTaskModal'
							/>
						</div>
					</div>
					<TaskList />
					<AddTaskModal
						handleAddTask={handleAddTask}
					/>
				</div>
			</ToDoListDispatchContext.Provider>
		</ToDoListContext.Provider>
	);
};

export default ToDoList;