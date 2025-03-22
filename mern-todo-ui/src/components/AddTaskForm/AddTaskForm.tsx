import { useState } from 'react';

import Button from '../Button/Button';

interface AddTaskFormProps {
	handleAddTask: (task: string) => void;
};

const AddTaskForm: React.FC<AddTaskFormProps> = ( { handleAddTask}  ) => {
	const [formData, setFormData] = useState({
		taskName: ''
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		handleAddTask(formData.taskName);
		setFormData({
			taskName: ''
		});
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
			<Button label='Submit' type={'submit'}  />
		</form>
	);
};

export default AddTaskForm;