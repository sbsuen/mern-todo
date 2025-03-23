import React from 'react';

interface ModalBodyProps {
	children: React.ReactNode;
}

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
	return (
		<section className="modal-card-body">
			{children}
		</section>
	);
};

export default ModalBody;