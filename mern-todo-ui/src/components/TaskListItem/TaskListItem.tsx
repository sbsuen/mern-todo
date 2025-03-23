import React, { useContext } from 'react';

import { SelectedTaskDispatchContext } from '../../contexts/SelectedTaskContext';

import Task from '../../models/Task';
import IconButton from '../IconButton/IconButton';
import DeleteTaskIcon from '../DeleteTaskIcon/DeleteTaskIcon';
import CompleteTaskIcon from '../CompleteTaskIcon/CompleteTaskIcon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

interface TaskListItemProps {
	task: Task;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ task }) => {
	const dispatch = useContext(SelectedTaskDispatchContext);

	return (
		<li key={task._id} className='box'>
			<div className="columns my-1">
				<div className="column is-1">
					<CompleteTaskIcon taskId={task._id} isComplete={task.isComplete} onClick={() => { }} />
				</div>
				<div className="column is-10" style={{ textDecoration: task.isComplete ? 'line-through' : 'none' }}>
					{task.name}
				</div>
				<div className="column is-1">
					<IconButton>
						<FontAwesomeIcon icon={faPenToSquare} />
					</IconButton>
					<DeleteTaskIcon taskId={task._id} onDelete={() => { }} />
				</div>
			</div>
		</li>
	);
};

export default TaskListItem;