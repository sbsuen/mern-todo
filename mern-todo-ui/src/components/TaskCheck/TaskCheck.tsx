import React from "react";
import Task from "../../models/Task";

interface TaskCheckProps {
	task: Task;
}

const TaskCheck: React.FC<TaskCheckProps> = ({ task }) => {
	return(
		<div className="form-check form-check-inline">
			<input
				type="checkbox"
				className="form-check-input"
				id="taskCheck"
				checked={task.isComplete}
			/>
			<label className="form-check-label" htmlFor="taskCheck">{ task.name }</label>
		</div>
	)
}

export default TaskCheck;