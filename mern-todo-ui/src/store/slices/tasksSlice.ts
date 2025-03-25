import { createSlice } from "@reduxjs/toolkit";

import Task from "../../models/Task";

interface TasksState {
	tasks: Task[];
}

const initialState: TasksState = {
	tasks: [
		{ _id: '1', name: 'Task 1', isComplete: false },
		{ _id: '2', name: 'Task 2', isComplete: true },
		{ _id: '3', name: 'Task 3', isComplete: false },
	],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
	addTask: (state, action) => {
	  state.tasks.push({
		_id: (state.tasks.length + 1).toString(),
		name: action.payload,
		isComplete: false,
	  });
	}
  }
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;