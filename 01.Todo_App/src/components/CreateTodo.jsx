import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoProvider";

const CreateTodo = () => {
    const [todoTitle, setTodoTitle] = useState("")
    const {todoList, setTodoList} = useContext(TodoContext)
    const handleChange = (e)=>{
        setTodoTitle(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault()
        if(todoTitle == "") return alert("Please Provide Something...")
        const createTodo = {
            id:1,
            title:todoTitle,
            status:true,
        }
        setTodoList([...todoList, createTodo])
        setTodoTitle("")
    }
    return (
        <div className="mb-4">
            <form onSubmit={handleSubmit} className="text-center">
                <input value={todoTitle} onChange={handleChange} type="text" placeholder="Something..." className="input" />
                <button className="btn btn-primary ms-4">Create Todo</button>
            </form>
        </div>
    );
};

export default CreateTodo;