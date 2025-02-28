import Button from "../ui/Button";

const FilterMovie = ({_onClick}) => {
    return (
        <div className='text-center'>
            <div className="join">
                <Button _onClick={()=>_onClick("all")} name="All" style="btn join-item btn-soft btn-soft"/>
                <Button _onClick={()=>_onClick("watched")} name="Watched" style="btn join-item btn-soft btn-accent"/>
                <Button _onClick={()=>_onClick("unwatch")} name="Unwatched" style="btn join-item btn-soft btn-warning"/>
            </div>
        </div>
    );
};

export default FilterMovie;