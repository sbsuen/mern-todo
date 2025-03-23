import { useState, useContext } from 'react';
import { ToDoListDispatchContext } from '../../contexts/ToDoListContext';

import Button from '../Button/Button';

interface AddTaskFormProps {
	onClose: () => void;
}

export const AddTaskForm: React.FC<AddTaskFormProps> = ({ onClose }) => {
	const [formData, setFormData] = useState({
		taskName: ''
	});
	const dispatch = useContext(ToDoListDispatchContext);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (dispatch) {
			dispatch({
				type: 'ADD_TASK',
				payload: formData.taskName
			});
		}
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

export const AddTaskFormSubmitButton = () => (
	<Button
		label='Submit'
		type={'submit'}
		buttonStyle='link'
		form='addTaskForm'
	/>
);