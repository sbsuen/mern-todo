import React from "react";
import Button from "../Button/Button";

const AddTaskFormSubmitButtons = (): React.ReactElement => {
	return (
		<Button
			label='Submit'
			type={'submit'}
			buttonStyle='link'
			form='addTaskForm'
		/>
	);
};

export default AddTaskFormSubmitButtons;