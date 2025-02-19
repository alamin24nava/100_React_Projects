import MovieList from './MovieList';
const MovieLists = ({movies, removeMovie, toggleWatch}) => {
    let content;
    if(movies.length == 0){
        content = (
            <ul className="list bg-base-100 items-center justify-center rounded-box shadow-md border border-gray-600 min-h-32">      
                No Data Available
            </ul>
        )
    }else if(movies.length > 0){
        content = (
            <ul className="list bg-base-100 rounded-box shadow-md border border-gray-600">      
                {
                    movies.map(function(item, index){
                        return (
                            <MovieList key={index} index={index + 1} movie={item} removeMovie={removeMovie} toggleWatch={toggleWatch}/> 
                        )
                    })
                }
            </ul>
        )
    }
    return content
    // return (
    //     <>
    //         <ul className="list bg-base-100 rounded-box shadow-md border border-gray-600">      
    //             {
    //                 movies.map(function(item, index){
    //                     return (
    //                         <MovieList key={index} index={index + 1} movie={item} removeMovie={removeMovie} toggleWatch={toggleWatch}/> 
    //                     )
    //                 })
    //             }
    //         </ul>
    //     </>
    // );
};

export default MovieLists;