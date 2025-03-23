import React from 'react';

interface ButtonProps {
	label: string;
	onClick?: () => void | undefined;
	type?: string;
	form?: string;
	buttonStyle?: string;
}

const Button: React.FC<ButtonProps> = ({ 
	label, 
	onClick = undefined, 
	type = 'button',
	form = '',
	buttonStyle = ''
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

	const getButtonStyle = () => {
		switch(buttonStyle) {
			case 'primary':
				return 'is-primary';
			case 'danger':
				return 'is-danger';
			case 'warning':
				return 'is-warning';
			case 'info':
				return 'is-info';
			case 'success':
				return 'is-success';
			case 'link':
				return 'is-link';
			case 'light':
				return 'is-light';
			case 'dark':
				return 'is-dark';
			case 'text':
				return 'is-text';
			default:
				return '';
		}
	};

	return (
		<button 
			className={`button ${getButtonStyle()}`}
			type={getButtonType()} 
			onClick={onClick}
			form={form}
		>
			{label}
		</button>
	);
};

export default Button;