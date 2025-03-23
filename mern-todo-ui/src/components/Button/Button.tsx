import React from 'react';

interface ButtonProps {
	label: string;
	onClick?: () => void | undefined;
	modalId?: string | undefined;
	type?: string;
	dismissesModal?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
	label, 
	onClick = undefined, 
	type = 'button',
	modalId = undefined,
	dismissesModal = false
}) => {
	const getButtonType = () => {
		switch(type) {
			case 'submit':
				return 'submit';
			case 'reset':
				return 'reset';
			case 'button':
			default:
				return 'button';
		}
	};

	return (
		<button 
			className="btn btn-primary" 
			type={getButtonType()} 
			onClick={onClick}
			data-bs-toggle={modalId ? 'modal' : undefined}
			data-bs-target={modalId ? `#${modalId}` : undefined}
			data-bs-dismiss={dismissesModal ? 'modal' : undefined}
		>
			{label}
		</button>
	);
};

export default Button;