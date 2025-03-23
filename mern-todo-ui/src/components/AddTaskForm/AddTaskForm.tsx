import { useState, useContext } from 'react';
import { ToDoListDispatchContext } from '../../contexts/ToDoListContext';

import Button from '../Button/Button';

interface AddTaskFormProps {
	onClose: () => void;
}

const AddTaskForm: React.FC<any> = ( { onClose }) => {
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
		<form onSubmit={ handleSubmit }>
			<div className='form-group pb-2'>
				<label htmlFor='addTaskName'>Task Name</label>
				<input 
					type='text' 
					className='form-control' 
					id='addTaskName'
					name="taskName"
					value={formData.taskName} 
					onChange={handleChange} 
				/>
			</div>
			<Button
				label='Submit'
				type={'submit'}
			/>
		</form>
	);
};

export default AddTaskForm;