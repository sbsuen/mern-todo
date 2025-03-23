import React from 'react';
import IconButton from '../IconButton/IconButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface DeleteTaskIconProps {
	taskId: string;
	isComplete: boolean;
	onClick: () => void;
}

const CompleteTaskIcon: React.FC<DeleteTaskIconProps> = ({ taskId, isComplete, onClick }) => {
	return (
		<IconButton onClick={onClick} ariaLabel="Mark Task Complete" additionalClasses={isComplete ? 'completed' : ''}>
			<FontAwesomeIcon icon={faCheck} />
		</IconButton>
	);
};

export default CompleteTaskIcon;