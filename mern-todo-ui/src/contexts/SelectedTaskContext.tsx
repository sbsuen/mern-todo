import { createContext, ReactNode, useReducer } from "react";

export const SelectedTaskContext = createContext<string | null>(null);
export const SelectedTaskDispatchContext = createContext<React.Dispatch<any> | null>(null);

export const SelectedTaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [selectedTask, dispatch] = useReducer(selectedTaskReducer, null);
	return (
		<SelectedTaskContext.Provider value={null}>
			<SelectedTaskDispatchContext.Provider value={null}>
				{children}
			</SelectedTaskDispatchContext.Provider>
		</SelectedTaskContext.Provider>
	);
};

const selectedTaskReducer = (state: string | null, action: any) => {
	switch (action.type) {
		case 'SET_SELECTED_TASK':
			return action.payload;
		default:
			return state;
	}
};