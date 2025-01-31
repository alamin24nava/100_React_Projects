import { useContext } from "react";
import { TodoContext } from "../Context/TodoProvider";

const Table = () => {
    const {todoList} = useContext(TodoContext)
    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Status</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todoList?.map((todo, inx)=>{
                                return(
                                    <tr key={inx}>
                                        <th>{inx+1}</th>
                                        <td><input type="checkbox" className="checkbox checkbox-primary" /></td>
                                        <td>{todo.title}</td>
                                        <td>
                                            <div className="flex gap-3">
                                                <button className="btn btn-xs btn-soft">Edit</button>
                                                <button className="btn btn-xs btn-error">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
