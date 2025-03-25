import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { addTask } from '../../store/slices/tasksSlice';

interface AddTaskFormProps {
	onClose: () => void;
}

export const AddTaskForm: React.FC<AddTaskFormProps> = ({ onClose }) => {
	const [formData, setFormData] = useState({
		taskName: ''
	});
	const dispatch = useDispatch<AppDispatch>();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (formData.taskName.trim() === '') {
			return;
		}

		// Using Redux
		dispatch(addTask(formData.taskName));
		setFormData({
			taskName: ''
		});
		onClose();
	};

	return (
		<form id="addTaskForm" onSubmit={handleSubmit}>
			<label className='label' htmlFor='addTaskName'>Task Name</label>
			<input
				type='text'
				className='input'
				id='addTaskName'
				name="taskName"
				value={formData.taskName}
				onChange={handleChange}
			/>
		</form>
	);
};

export default AddTaskForm;