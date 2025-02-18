import MovieList from './MovieList';
const MovieLists = () => {
    return (
        <>
            <ul className="list bg-base-100 rounded-box shadow-md border border-gray-600">                
                <MovieList/>
                <MovieList/>
                <MovieList/>
                <MovieList/>
            </ul>
        </>
    );
};

export default MovieLists;