import React from 'react';
import IconButton from '../IconButton/IconButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface DeleteTaskIconProps {
	taskId: string;
	onDelete: () => void;
}

const DeleteTaskIcon: React.FC<DeleteTaskIconProps> = ({ taskId, onDelete }) => {
	return (
		<IconButton onClick={onDelete} ariaLabel="Delete Task">
			<FontAwesomeIcon icon={faTrash} />
		</IconButton>
	);
};

export default DeleteTaskIcon;