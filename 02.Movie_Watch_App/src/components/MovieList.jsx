const MovieList = () => {
    return (
        <>
            <li className="list-row">
                <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
                <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
                <div className="list-col-grow">
                    <div>Dio Lupa <span>5/5</span></div>
                    <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                </div>
                <button className="btn btn-soft btn-accent">Watch</button>
                <button className="btn btn-soft btn-secondary">Unwatch</button>
            </li>
        </>
    );
};

export default MovieList;