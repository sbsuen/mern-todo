import { useState } from 'react';

interface ToDoListProps {
	// Your props go here
}

interface Task {
	_id: string;
	name: string;
	isComplete: boolean;
}

const ToDoList: React.FC<ToDoListProps> = (props) => {
	const [tasks, setTasks] = useState<Task[]>([
		{ _id: '1', name: 'Task 1', isComplete: false },
		{ _id: '2', name: 'Task 2', isComplete: true },
		{ _id: '3', name: 'Task 3', isComplete: false },
	]);
	return (
		<div>
			<h1>My Todo List</h1>
			<ul>
				{tasks.map((task) => (
					<li key={task._id}>
						<input type="checkbox" checked={task.isComplete} />
						<span>{task.name}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ToDoList;