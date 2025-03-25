import Button from "../Button/Button";

interface DeleteTaskFormButtonsProps {
	onCancel: () => void;
	onDelete: () => void;
}

const DeleteTaskFormButtons: React.FC<DeleteTaskFormButtonsProps> = ({ onCancel, onDelete }) => {
	return (
		<div className='buttons'>
			<Button label='Delete' buttonStyle='link' type='submit' onClick={onDelete} />
			<Button label='Cancel' buttonStyle='secondary' type='button' onClick={onCancel} />
		</div>
	);
};

export default DeleteTaskFormButtons;