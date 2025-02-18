import MovieLists from '../components/MovieLists';
import Header from "../components/Header"
import FilterMovie from "../components/FilterMovie"
import MovieForm from '../components/MovieForm';
import { useState } from 'react';

const Home = () => {
    const [movies, setMovies] = useState([
        {
            id:1,
            title:"A simple star rating component for your React projects ",
            platform:"netflix",
            status:false
        },
        {
            id:2,
            title:"A simple star rating component for your React projects ",
            platform:"hulu",
            status:false
        },
        {
            id:3,
            title:"A simple star rating component for your React projects ",
            platform:"amazon",
            status:true
        }
    ])
    const removeMovie = (id)=>{
        setMovies(movies.filter((item)=>item.id !== id))
    }
    return (
        <div className='flex flex-col gap-4'>
            <Header/>
            <MovieForm/>
            <FilterMovie/>
            <MovieLists movies={movies} removeMovie={removeMovie}/>
        </div>
    );
};

export default Home;