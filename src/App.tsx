import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

function App() {
    const todoListTitle_1: string = "What to learn"
    const todoListTitle_2: string = "What to buy"
    const tasks_1: TaskType[] = [
        {id: 1, title: "HTML&CSS", isDone: false},
        {id: 2, title: "JS/ES6&TS", isDone: true},
        {id: 3, title: "REACT", isDone: false},
    ]
    const tasks_2: TaskType[] = [
        {id: 1, title: "MILK", isDone: false},
        {id: 2, title: "BREAD", isDone: true},
        {id: 3, title: "BOOK", isDone: true},
    ]
    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={tasks_1}/>
            <TodoList title={todoListTitle_2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
