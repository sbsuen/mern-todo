import ModalHeader from '../ModalHeader/ModalHeader';
import ModalBody from '../ModalBody/ModalBody';
import ModalFooter from '../ModalFooter/ModalFooter';
import './Modal.scss';

interface ModalProps {
	id: string;
	title: string;
	show: boolean;
	onClose: () => void;
	modalBody?: React.ReactNode | undefined;
	modalFooter?: React.ReactNode | undefined;
}

const Modal: React.FC<ModalProps> = ({ id, title, show, onClose, modalBody = undefined, modalFooter = undefined }) => {

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
					<ModalHeader title={title} onClose={onClose} />
					{modalBody && <ModalBody>{modalBody}</ModalBody>}
					{modalFooter && <ModalFooter>{modalFooter}</ModalFooter>}
				</div>
			</div>
		</div>
	);
};

export default Modal;