import { useState } from "react";

const CreateTodo = () => {
    const [todoTitle, setTodoTitle] = useState("")
    const handleChange = (e)=>{
        setTodoTitle(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault()
        const createTodo = {
            id:1,
            title:todoTitle,
            status:false,
        }
        console.log(createTodo);
    }
    return (
        <div className="mb-4">
            <form onSubmit={handleSubmit} className="text-center">
                <input onChange={handleChange} type="text" placeholder="Something..." className="input" />
                <button className="btn btn-primary ms-4">Create Todo</button>
            </form>
        </div>
    );
};

export default CreateTodo;