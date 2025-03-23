import { ToDoListProvider } from '../../contexts/ToDoListContext';
import Button from '../Button/Button';
import AddTaskModal from '../AddTaskModal/AddTaskModal';
import TaskList from '../TaskList/TaskList';

const ToDoList: React.FC<any> = () => {
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
							modalId='addTaskModal'
						/>
					</div>
				</div>
				<TaskList />
				<AddTaskModal />
			</div>
		</ToDoListProvider>
	);
};

export default ToDoList;