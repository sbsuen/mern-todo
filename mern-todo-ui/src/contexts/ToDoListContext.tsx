import { createContext } from 'react';
import Task from '../models/Task';

export const ToDoListContext = createContext<Task[] | null>(null);
export const ToDoListDispatchContext = createContext<React.Dispatch<any> | null>(null);