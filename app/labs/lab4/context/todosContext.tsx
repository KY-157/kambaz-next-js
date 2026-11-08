"use client";

import { createContext, createElement, useContext, useState, type ReactNode } from "react";

export type Todo = { id: string; title: string };

type TodosContextValue = {
    todos: Todo[];
    addTodo: (title: string) => void;
    updateTodo: (id: string, title: string) => void;
    deleteTodo: (id: string) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
    const [todos, setTodos] = useState<Todo[]>([
        { id: "1", title: "Feed the cat" },
        { id: "2", title: "Buy more cat food" },
    ]);

    const addTodo = (title: string) =>
        setTodos((prev) => [...prev, { id: crypto.randomUUID(), title }]);
    const updateTodo = (id: string, title: string) =>
        setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, title } : t)));
    const deleteTodo = (id: string) =>
        setTodos((prev) => prev.filter((t) => t.id !== id));

    return createElement(
        TodosContext.Provider,
        { value: { todos, addTodo, updateTodo, deleteTodo } },
        children
    );
}

export function useTodos() {
    const value = useContext(TodosContext);
    if (!value) {
        throw new Error("useTodos must be used inside TodosProvider");
    }
    return value;
}