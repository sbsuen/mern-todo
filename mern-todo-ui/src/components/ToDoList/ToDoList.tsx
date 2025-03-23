import { useState } from 'react';
import { ToDoListProvider } from '../../contexts/ToDoListContext';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import TaskList from '../TaskList/TaskList';

const ToDoList: React.FC<any> = () => {
	const [showAddTaskModal, setShowAddTaskModal] = useState(false);

	const showAddTaskModalHandler = () => {
		setShowAddTaskModal(true);
	};

	const hideAddTaskModalHandler = () => {
		setShowAddTaskModal(false);
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
							onClick={showAddTaskModalHandler}
						/>
					</div>
				</div>
				<TaskList />
				<Modal
					id='addTaskModal'
					show={showAddTaskModal}
					onClose={hideAddTaskModalHandler}
				>
					<AddTaskForm onClose={hideAddTaskModalHandler} />
				</Modal>
			</div>
		</ToDoListProvider>
	);
};

export default ToDoList;