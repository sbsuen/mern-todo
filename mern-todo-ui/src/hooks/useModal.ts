import { useState, useCallback } from "react";

const useModal = () => {
	const [showModal, setShowModal] = useState(false);

	const openModal = useCallback(() => {
		setShowModal(true);
	}, []);

	const closeModal = useCallback(() => {
		setShowModal(false);
	}, []);

	return {
		showModal,
		openModal,
		closeModal
	};
};

export default useModal;