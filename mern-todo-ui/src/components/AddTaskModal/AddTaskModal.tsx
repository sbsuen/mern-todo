import React from 'react';

import AddTaskForm from '../AddTaskForm/AddTaskForm';

const AddTaskModal: React.FC<any> = () => {
	
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
						<AddTaskForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddTaskModal;