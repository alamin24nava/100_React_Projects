import MovieList from './MovieList';
const MovieLists = ({movies, removeMovie}) => {
    return (
        <>
            <ul className="list bg-base-100 rounded-box shadow-md border border-gray-600">      
                {
                    movies.map(function(item, index){
                        return (
                            <MovieList key={index} index={index + 1} movie={item} removeMovie={removeMovie}/> 
                        )
                    })
                }
            </ul>
        </>
    );
};

export default MovieLists;