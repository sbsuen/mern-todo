import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './components/ToDoList/ToDoList';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  return (
    <>
      <ToDoList />
    </>
  )
}

export default App
