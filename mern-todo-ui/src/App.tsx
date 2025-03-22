import { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Task from './models/Task';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
	return (
		<ToDoList />
	)
}
export default App
