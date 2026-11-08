"use client";

import { useState } from "react";
import { useTodos, type Todo } from "./todosContext";

function TodoItem({ todo }: { todo: Todo }) {
    const { updateTodo, deleteTodo } = useTodos();
    const [title, setTitle] = useState(todo.title);
    return (
        <li className="list-group-item d-flex gap-2">
            <input
                className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="wd-todo-input"
            />
            <button
                type="button"
                onClick={() => updateTodo(todo.id, title)}
                className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
                id="wd-todo-update"
            >
                Update
            </button>
            <button 
                type="button"
                onClick={() => deleteTodo(todo.id)}
                className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            >
                Delete
            </button>
        </li>
    );
}

export default function ReactContextTodoList() {
    const { todos, addTodo } = useTodos();
    const [newTitle, setNewTitle] = useState("");
    return (
        <div id="wd-context-todo-list">
            <h2>Todo List (Context)</h2>
            <ul className="list-group">
                <li className="list-group-item d-flex gap-2">
                    <input
                        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        id="wd-todo-new"
                    />
                    <button
                        type="button"
                        onClick={() => { addTodo(newTitle); setNewTitle(""); }}
                        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
                        id="wd-todo-add"
                    >
                        Add
                    </button>
                </li>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
}
