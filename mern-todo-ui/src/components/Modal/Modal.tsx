import CloseButton from '../CloseButton/CloseButton';
import './Modal.scss';

interface ModalProps {
	children: React.ReactNode;
	id: string;
	show: boolean;
	onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, id, show, onClose }) => {

	const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	}
	return (
		<div
			className={`modal ${show ? 'modal-show' : 'modal-hide'}`}
			tabIndex={-1}
			id={id}
			role='dialog'
			style={
				{
					display: show ? 'block' : 'none'
				}
			}
			onClick={handleOutsideClick}
			aria-hidden={show}
		>
			<div className='modal-dialog' role='document'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>Add Task</h5>
						<CloseButton onClick={onClose} />
					</div>
					<div className='modal-body'>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;