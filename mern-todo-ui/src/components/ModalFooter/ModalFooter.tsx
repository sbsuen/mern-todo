import React from 'react';

interface ModalFooterProps {
	children: React.ReactNode;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
	return (
		<div className="modal-footer">
			{children}
		</div>
	);
};

export default ModalFooter;