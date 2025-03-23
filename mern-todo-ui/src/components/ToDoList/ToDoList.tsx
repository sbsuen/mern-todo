import { useState } from 'react';
import { ToDoListProvider } from '../../contexts/ToDoListContext';
import AppContextProvider from '../../contexts/AppContextProvider';
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
		<AppContextProvider>
			<div className="container">
				<h1 className='is-size-1 has-text-centered mt-3 mb-3'>My Todo List</h1>
				<hr />
				<div className='is-flex is-justify-content-center'>
					<Button
						label="Add Task"
						buttonStyle="link"
						onClick={openAddTaskModal}
					/>
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
		</AppContextProvider>
	);
};

export default ToDoList;