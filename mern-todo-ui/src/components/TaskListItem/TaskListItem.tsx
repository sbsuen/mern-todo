import React from 'react';
import Task from '../../models/Task';
import TaskCheck from '../TaskCheck/TaskCheck';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface TaskListItemProps {
	task: Task;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ task }) => {
	return (
		<li key={task._id} className='list-group-item'>
			<TaskCheck task={task} />
			<FontAwesomeIcon icon={faPenToSquare} />
			<FontAwesomeIcon icon={faTrash} />
		</li>
	);
};

export default TaskListItem;