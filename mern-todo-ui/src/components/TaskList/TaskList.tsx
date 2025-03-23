import React, { useContext } from 'react';
import { ToDoListContext } from '../../contexts/ToDoListContext';
import TaskListItem from '../TaskListItem/TaskListItem';

const TaskList: React.FC = () => {
	const tasks = useContext(ToDoListContext);
	return (
		<div className='row mt-3'>
			<div className='col'>
				<ul className='list-group'>
					{tasks && tasks.map((task) => (
						<TaskListItem task={task} key={task._id} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default TaskList;