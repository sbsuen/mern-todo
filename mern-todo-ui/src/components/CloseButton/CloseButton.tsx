import React from 'react';

interface CloseButtonProps {
	onClick?: () => void | undefined;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick = undefined }) => {
	return (
		<button 
			type="button" 
			className="btn-close" 
			aria-label="Close"
			onClick={onClick}
			data-dismiss="modal"
		></button>
	);
};

export default CloseButton;