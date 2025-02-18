import ReactStars from 'react-stars'
const MovieList = () => {
    return (
        <>
            <li className="list-row items-center">
                <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
                <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
                <div className="list-col-grow">
                    <div className='flex gap-2 items-center'>
                        <span className='truncate max-w-[240px]'>There are currently about 57 providers of over-the-top media services (OTT) in India, which distribute streaming media or video on demand over the Internet.</span>
                        <ReactStars value={2} count={1} size={24} color2={'#ffd700'} />
                        <span>5/5</span>
                    </div>
                    <div className="text-xs uppercase font-semibold opacity-60">Netflix</div>
                </div>
                <button className="btn btn-soft btn-accent">Watch</button>
                <button className="btn btn-soft btn-secondary">Remove</button>
            </li>
        </>
    );
};

export default MovieList;