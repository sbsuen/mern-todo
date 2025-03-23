import React from 'react';

interface ButtonProps {
	label: string;
	onClick?: () => void | undefined;
	type?: string;
	form?: string;
}

const Button: React.FC<ButtonProps> = ({ 
	label, 
	onClick = undefined, 
	type = 'button',
	form = ''
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
			form={form}
		>
			{label}
		</button>
	);
};

export default Button;