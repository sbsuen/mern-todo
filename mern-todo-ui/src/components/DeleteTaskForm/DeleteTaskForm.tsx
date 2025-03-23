import React from 'react';
import Button from '../Button/Button';

export const DeleteTaskFormMessage: React.FC<any> = () => {
	return (
		<div>
			<p>Are you sure you want to delete this task?</p>
		</div>
	);
};

interface DeleteTaskFormButtonsProps {
	onCancel: () => void;
	onDelete: () => void;
}

export const DeleteTaskFormButtons: React.FC<DeleteTaskFormButtonsProps> = ({ onCancel, onDelete }) => {
	return (
		<div>
			<Button label='Cancel' buttonStyle='secondary' type='button' onClick={onCancel} />
			<Button label='Delete' buttonStyle='primary' type='submit' onClick={onDelete} />	
		</div>
	);
}
	