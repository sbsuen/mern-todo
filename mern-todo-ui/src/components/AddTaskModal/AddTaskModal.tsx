import React from 'react';

import AddTaskForm from '../AddTaskForm/AddTaskForm';

interface AddTaskModalProps {
	handleAddTask: (task: string) => void;
};

const AddTaskModal: React.FC<AddTaskModalProps> = ({ handleAddTask }) => {
	return (
		<div
			className='modal fade'
			id="addTaskModal"
			tabIndex={-1}
			role='dialog'
		>
			<div className='modal-dialog' role='document'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>Add Task</h5>
						<button
							type='button'
							className='btn-close'
							data-dismiss='modal'
							aria-label='Close'
							data-bs-dismiss='modal'
						></button>
					</div>
					<div className='modal-body'>
						<AddTaskForm handleAddTask={handleAddTask} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddTaskModal;