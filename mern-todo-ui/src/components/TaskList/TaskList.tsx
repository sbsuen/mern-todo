import React, { useContext } from 'react';
import { ToDoListContext } from '../../contexts/ToDoListContext';
import TaskListItem from '../TaskListItem/TaskListItem';
import './TaskList.scss';

const TaskList: React.FC = () => {
	const tasks = useContext(ToDoListContext);
	return (
		<div className='content mt-5'>
			<ul>
				{tasks && tasks.map((task) => (
					<TaskListItem task={task} key={task._id} />
				))}
			</ul>
		</div>
	);
};

export default TaskList;