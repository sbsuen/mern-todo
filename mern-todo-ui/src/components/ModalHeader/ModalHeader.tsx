import CloseButton from "../CloseButton/CloseButton";
import React from 'react';

interface ModalHeaderProps {
	title: string;
	onClose: () => void;
};

const ModalHeader: React.FC<ModalHeaderProps> = React.memo(({ title, onClose }) => {
	return (
		<header className='modal-card-head'>
			<p className='modal-card-title'>{title}</p>
			<CloseButton onClick={onClose} />
		</header>
	);
});

export default ModalHeader;