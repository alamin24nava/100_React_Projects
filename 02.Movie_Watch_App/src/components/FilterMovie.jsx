const FilterMovie = () => {
    return (
        <div className='text-center'>
            <div className="join">
                <button className="btn join-item btn-soft">All</button>
                <button className="btn join-item btn btn-soft btn-accent">Watched</button>
                <button className="btn join-item btn-soft btn-secondary">Unwatched</button>
            </div>
        </div>
    );
};

export default FilterMovie;