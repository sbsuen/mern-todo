import React from 'react';

interface ModalFooterProps {
	children: React.ReactNode;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
	return (
		<footer className="modal-card-foot">
			{children}
		</footer>
	);
};

export default ModalFooter;