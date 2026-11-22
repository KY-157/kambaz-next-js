"use client";

import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithRemoteArrays() {
    const API = `${HTTP_SERVER}/lab5/todos`;
    const [todo, setTodo] = useState({ 
        id: "1",
        title: "Task 1",
        completed: false,
        description: "Task description", 
    });
    return(
        <div>
            <h4>Retrieving Arrays</h4>
            <a id="wd-retrieve-todos" 
                className="inline-block me-2 mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
                href={API}
            >
                Get Todos
            </a>
            <h4>Retrieving an Item from an Array by ID</h4>
            <a id="wd-retrieve-todo-by-id" 
                className="inline-block me-2 mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
                href={`${API}/${todo.id}`}
            >
                Get Todo by ID
            </a>
            <input id="wd-todo-id" 
                value={todo.id}
                onChange={(e) => setTodo({ ...todo, id: e.target.value })} 
            />
            <h4>Filtering Array Items</h4>
            <a id="wd-retrieve-completed-todos" 
                className="inline-block me-2 mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
                href={`${API}?completed=true`}
            >
                Get Completed Todos
            </a>
            <h4>Creating new Items in an Array</h4>
            <a id="wd-create-todo" 
                className="inline-block me-2 mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
                href={`${API}/create`}
            >
                Create Todo
            </a>
            <h4>Removing from an Array</h4>
            <a id="wd-remove-todo" 
                className="inline-block me-2 mb-2 rounded bg-red-600 px-3 py-1.5 text-sm text-white"
                href={`${API}/${todo.id}/delete`}
            >
                Remove Todo with ID = {todo.id}
            </a>
            <h4>Updating an Item in an Array</h4>
            <a id="wd-update-todo-title"
                className="inline-block me-2 mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
                href={`${API}/${todo.id}/title/${todo.title}`}
            >
                Update Todo
            </a>
            <input id="wd-todo-title"
                value={todo.title} 
                onChange={(e) => setTodo({ ...todo, title: e.target.value })} 
            />
            <br />
            <a id="wd-update-todo-completed"
                className="inline-block me-2 mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
                href={`${API}/${todo.id}/completed/${todo.completed}`}
            >
                Complete Todo ID = 1
            </a>
            <input id="wd-todo-completed" 
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => setTodo({ ...todo, completed: e.target.checked })} 
            />
            <br />
            <a id="wd-update-todo-description"
                className="inline-block me-2 mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
                href={`${API}/${todo.id}/description/${todo.description}`}
            >
                Describe Todo ID = 1
            </a>
            <input id="wd-todo-description"
                value={todo.description} 
                onChange={(e) => setTodo({ ...todo, description: e.target.value })} 
            />
            <hr />
        </div>
    );
}