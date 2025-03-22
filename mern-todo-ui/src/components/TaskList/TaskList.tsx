import React, { useContext } from 'react';
import { ToDoListContext } from '../../contexts/ToDoListContext';

const TaskList: React.FC = () => {
	const tasks = useContext(ToDoListContext);
	return (
		<div className='row mt-3'>
			<div className='col'>
			<ul className='list-group'>
				{tasks && tasks.map((task) => (
					<li key={task._id} className='list-group-item'>
						{task.name}
					</li>
				))}
			</ul>
		</div>
		</div>
		
	);
};

export default TaskList;