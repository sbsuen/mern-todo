import React from 'react';
import './IconButton.scss';

interface IconButtonProps {
	children: React.ReactNode;
	onClick?: () => void | undefined;
	ariaLabel?: string;
	additionalClasses?: string;
}
const IconButton: React.FC<IconButtonProps> = ({
	children,
	onClick,
	ariaLabel = '',
	additionalClasses = ''
}) => {
	return (
		<button
			type='button'
			className={`icon-button ${additionalClasses}`}
			onClick={onClick}
			aria-label={ariaLabel}
		>
			{children}
		</button>
	);
}

export default IconButton;