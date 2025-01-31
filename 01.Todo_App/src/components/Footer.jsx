import { useContext } from "react";
import { TodoContext } from "../Context/TodoProvider";

const Footer = () => {
    const {todoLength} = useContext(TodoContext)
    return (
        <div className="flex gap-2 justify-between mt-8">
            <div> Total Todos <span>{todoLength}</span></div>
            <div className="flex gap-2">
                <span>Sort:</span>
                <button className="btn btn-xs btn-soft">All</button>
                <button className="btn btn-xs btn-soft">Complete</button>
                <button className="btn btn-xs btn-soft">Incomplete</button>
            </div>
        </div>
    );
};

export default Footer;