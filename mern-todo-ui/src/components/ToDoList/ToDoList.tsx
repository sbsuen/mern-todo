import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import AppContextProvider from '../../contexts/AppContextProvider';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import TaskList from '../TaskList/TaskList';
import useModal from '../../hooks/useModal';


const AddTaskForm = lazy(() => import('../AddTaskForm/AddTaskForm'));
const AddTaskFormSubmitButtons = lazy(() => import('../AddTaskForm/AddTaskFormButtons'));
const DeleteTaskForm = lazy(() => import('../DeleteTaskForm/DeleteTaskForm'));
const DeleteTaskFormButtons = lazy(() => import('../DeleteTaskForm/DeleteTaskFormButtons'));

function ToDoList(): React.ReactElement {
	const tasks = useSelector((state: RootState) => state.tasks.tasks);
	const {
		showModal: showAddTaskModal,
		openModal: openAddTaskModal,
		closeModal: closeAddTaskModal
	} = useModal();

	const {
		showModal: showDeleteModal,
		openModal: openDeleteTaskModal,
		closeModal: closeDeleteTaskModal
	} = useModal();

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
				<TaskList tasks={tasks} openDeleteModal={openDeleteTaskModal} />
				<Suspense fallback={<div>Loading...</div>}>
					<Modal
						id='addTaskModal'
						title='Add Task'
						show={showAddTaskModal}
						onClose={closeAddTaskModal}
						modalBody={<AddTaskForm onClose={closeAddTaskModal} />}
						modalFooter={<AddTaskFormSubmitButtons />}
					/>
				</Suspense>
				<Suspense fallback={<div>Loading...</div>}>
					<Modal
						id='deleteTaskModal'
						title='Delete Task'
						show={showDeleteModal}
						onClose={closeDeleteTaskModal}
						modalBody={<DeleteTaskForm />}
						modalFooter={
							<DeleteTaskFormButtons
								onCancel={closeDeleteTaskModal}
								onDelete={closeDeleteTaskModal}
							/>
						}
					/>
				</Suspense>
			</div>
		</AppContextProvider>
	);
};

export default ToDoList;