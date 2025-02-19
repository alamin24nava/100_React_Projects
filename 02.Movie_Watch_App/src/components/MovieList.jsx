import ReactStars from 'react-stars'
const MovieList = ({movie, removeMovie, toggleWatch}) => {
    return (
        <>
            <li className="list-row items-center">
                <div className="text-4xl font-thin opacity-30 tabular-nums">{movie.id}</div>
                <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
                <div className="list-col-grow">
                    <div className='flex gap-2 items-center'>
                        <span className='truncate max-w-[240px]'>{movie.title}</span>
                        <ReactStars value={1} count={1} size={20} color2={'#ffd700'} />
                        <span>5/5</span>
                    </div>
                    <div className="text-xs uppercase font-semibold opacity-60 flex gap-2 items-center">
                        <span>{movie.platform}</span>
                        <ReactStars value={1} count={5} size={16} color2={'#ffd700'} />
                    </div>
                </div>
                <button className={`${movie.status ? 'btn-accent' : 'btn-warning'} btn-soft btn`}>{movie.status !== false ? "Watched":"Unwatch"}</button>
                {/* <button className={`movie.status ? 'btn-accent btn btn-soft':'btn-primary btn btn-soft'`}>{movie.status !== false ? "Watched":"Unwatch"}</button> */}
                <button onClick={()=>removeMovie(movie.id)} className="btn btn-soft btn-error">Remove</button>
            </li>
        </>
    );
};

export default MovieList;