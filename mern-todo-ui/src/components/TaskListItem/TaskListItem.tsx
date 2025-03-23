import React from 'react';
import Task from '../../models/Task';
import TaskCheck from '../TaskCheck/TaskCheck';
import IconButton from '../IconButton/IconButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface TaskListItemProps {
	task: Task;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ task }) => {
	return (
		<li key={task._id} className='list-group-item'>
			<div className="row">
				<div className="col-8">
					<TaskCheck task={task} />
				</div>
				<div className="col-4 d-flex justify-content-end">
					<IconButton>
						<FontAwesomeIcon icon={faPenToSquare} />
					</IconButton>
					<IconButton>
						<FontAwesomeIcon icon={faTrash} />
					</IconButton>
				</div>
			</div>
		</li>
	);
};

export default TaskListItem;