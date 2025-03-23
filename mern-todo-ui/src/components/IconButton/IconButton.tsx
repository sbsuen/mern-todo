import React from 'react';
import './IconButton.scss';

interface IconButtonProps {
	children: React.ReactNode;
	onClick?: () => void | undefined;
}

const IconButton: React.FC<IconButtonProps> = ({ children, onClick }) => {
	return (
		<button
			type='button'
			className='icon-button'
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default IconButton;