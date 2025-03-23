import React from 'react';

interface CloseButtonProps {
	onClick?: () => void | undefined;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick = undefined }) => {
	return (
		<button 
			type="button" 
			className="delete" 
			aria-label="close"
			onClick={onClick}
		></button>
	);
};

export default CloseButton;