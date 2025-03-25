import React from 'react';
import TaskListItem from '../TaskListItem/TaskListItem';
import './TaskList.scss';
import Task from '../../models/Task';

interface TaskListProps {
	tasks: Task[] | null;
	openDeleteModal: () => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, openDeleteModal }) => {
	return (
		<div className='content mt-5'>
			<ul>
				{tasks && tasks.map((task) => (
					<TaskListItem task={task} key={task._id} openDeleteModal={openDeleteModal} />
				))}
			</ul>
		</div>
	);
};

export default React.memo(TaskList);