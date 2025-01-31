import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            title: "Quality Control Specialist",
            status: false,
        },
        {
            id: 2,
            title: "Quality Tax Accountan Specialist",
            status: true,
        },
        {
            id: 3,
            title: "Desktop Support Technicia",
            status: false,
        },
        {
            id: 4,
            title: "Quality Control Specialist",
            status: true,
        },
        {
            id: 42,
            title: "Quality Control Specialist",
            status: false,
        },
    ]);
    const todoLength = todoList.length;
    return (
        <TodoContext.Provider value={{ todoList, setTodoList, todoLength }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
