import { createContext, useState } from 'react';

export const TodoContext = createContext();

const TodoProvider = ({children}) => {
    const [todoList, setTodoList] = useState([
        {
            id:1,
            title:"Quality Control Specialist",
            status:false
        },
        {
            id:2,
            title:"Quality Tax Accountan Specialist",
            status:false
        },
        {
            id:3,
            title:"Desktop Support Technicia",
            status:false
        },
        {
            id:4,
            title:"Quality Control Specialist",
            status:false
        },
    ])
    return (
        <TodoContext.Provider value={{todoList}}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;