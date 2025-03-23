import CloseButton from "../CloseButton/CloseButton";

interface ModalHeaderProps {
	title: string;
	onClose: () => void;
};

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose }) => {
	return (
		<div className='modal-header'>
			<h5 className='modal-title'>{title}</h5>
			<CloseButton onClick={onClose} />
		</div>
	);
};

export default ModalHeader;