import { useState } from 'react';
import { ToDoListProvider } from '../../contexts/ToDoListContext';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { AddTaskForm, AddTaskFormSubmitButton } from '../AddTaskForm/AddTaskForm';
import TaskList from '../TaskList/TaskList';

const ToDoList: React.FC<any> = () => {
	const [showAddTaskModal, setShowAddTaskModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const openAddTaskModal = () => {
		setShowAddTaskModal(true);
	};

	const closeAddTaskModal = () => {
		setShowAddTaskModal(false);
	};

	const openDeleteTaskModal = () => {
		setShowDeleteModal(true);
	};

	const closeDeleteTaskModal = () => {
		setShowDeleteModal(false);
	};

	return (
		<ToDoListProvider>
			<div className="container">
				<div className="row">
					<h1 className='text-center mt-5 mb-3'>My Todo List</h1>
				</div>
				<hr />
				<div className="row justify-content-center">
					<div className='col-auto'>
						<Button
							label="Add Task"
							onClick={openAddTaskModal}
						/>
					</div>
				</div>
				<TaskList />
				<Modal
					id='addTaskModal'
					title='Add Task'
					show={showAddTaskModal}
					onClose={closeAddTaskModal}
					modalBody={<AddTaskForm onClose={closeAddTaskModal} />}
					modalFooter={<AddTaskFormSubmitButton />}
				/>
			</div>
		</ToDoListProvider>
	);
};

export default ToDoList;