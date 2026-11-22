"use client";

import { useState, useEffect } from "react";
import * as client from "./client";
import { FaTrash, FaPlusCircle, FaPencilAlt } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
type todo = { id: number; title: string; completed: boolean; editing?: boolean };
export default function WorkingWithRemoteObjectsAsynchronously() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });    
    const fetchAssignment = async () => {
        setAssignment(await client.fetchAssignment());
    };
    const updateTitle = async () => {
        setAssignment(await client.updateTitle(assignment.title));
    };
    useEffect(() => { fetchAssignment(); }, []);
    const [todos, setTodos] = useState<todo[]>([
        { id: 1, title: "Task 1", completed: false },
        { id: 2, title: "Task 2", completed: true },
        { id: 3, title: "Task 3", completed: false },
        { id: 4, title: "Task 4", completed: true },
    ]);
    const fetchTodos = async () => {
        setTodos(await client.fetchTodos());
    };
    const removeTodo = async (todo:todo) => {
        setTodos(await client.removeTodo(todo));
    };
    const createNewTodo = async () => {
        setTodos(await client.createNewTodo());
    };
    const postNewTodo = async () => {
        const newTodo = await client.postNewTodo({
        title: "New Posted Todo",
        completed: false,
        });
        setTodos([...todos, newTodo]);
    };
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const deleteTodo = async (todo:todo) => {
        try {
            await client.deleteTodo(todo);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error: unknown) {
            const err = error as { response?: { data?: { message?: string } } };
            setErrorMessage(err.response?.data?.message ?? "Failed to delete todo");
        }
    };
    const editTodo = (todo:todo) => {
        setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)));
    };
    const updateTodo = async (todo:todo) => {
        await client.updateTodo(todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    };
    useEffect(() => { fetchTodos(); }, []);

    return(
        <div>
            <h4>Assignment</h4>
            <input id="wd-async-title"
                className="form-control mb-2 border px-2 py-1 w-full"
                value={assignment.title}
                onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
            />
            <textarea id="wd-async-description"
                className="form-control mb-2 border px-2 py-1 w-full"
                value={assignment.description}
                onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
            />
            <input id="wd-async-date"
                type="date"
                value={assignment.due}  
                onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
            />
            <label className="me-2">
                <input id="wd-async-completed"
                    type="checkbox"
                    checked={assignment.completed}
                    onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
                />{" "}
                Completed
            </label>
            <br />
            <button 
                type="button" 
                className="inline-block me-2 mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
                onClick={updateTitle}
            >
                Update Title
            </button>
            <pre>{JSON.stringify(assignment, null, 2)}</pre>
            <hr />
            <h4>Todos</h4>
            <FaPlusCircle onClick={createNewTodo} id="wd-create-todo" className="cursor-pointer text-green-600" />
            <FaPlusCircle onClick={postNewTodo} id="wd-post-todo" className="cursor-pointer text-blue-600" />
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input type="checkbox" checked={todo.completed} onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })}/>
                    {!todo.editing && (
                        <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
                    )}
                    {todo.editing && (
                        <input
                            className="border px-2 py-1"
                            value={todo.title}
                            onChange={(e) => setTodos(todos.map((t) => (t.id === todo.id ? { ...t, title: e.target.value } : t)))}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") updateTodo({ ...todo, editing: false });
                            }}
                        />
                    )}
                    <FaTrash onClick={() => removeTodo(todo)} id="wd-remove-todo" className="cursor-pointer text-red-600" />
                    <TiDelete onClick={() => deleteTodo(todo)} id="wd-delete-todo" className="cursor-pointer text-2xl text-red-600" />
                    <FaPencilAlt onClick={() => editTodo(todo)} className="cursor-pointer text-blue-600" />
                </li>
            ))}
            {errorMessage && (
                <p id="wd-todo-error-message" className="rounded bg-red-100 px-3 py-2 text-red-800">
                    {errorMessage}
                </p>
            )}
        </div>
    );
}

