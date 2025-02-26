import MovieLists from '../components/MovieLists';
import Header from "../components/Header"
import FilterMovie from "../components/FilterMovie"
import MovieForm from '../components/MovieForm';
import { useState } from 'react';
import toast from "react-hot-toast";


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
        }
    ])
    const addMovie = (e,{title, platform,language},setMovieData)=>{
        e.preventDefault()
        if (title.trim() == "" || platform.trim() == "") return toast.error("Please Provide Title & OTT")
        const newMovie = {
            id:crypto.randomUUID(),
            title:title,
            platform:platform,
            language:language,
            status:false
        }
        setMovies([...movies, newMovie])
        setMovieData({
            title:"",
            platform:"",
            language:""
        })
    }
    // console.log(addMovie());
    const removeMovie = (id)=>{
        setMovies(movies.filter((item)=>item.id !== id))
    }
    const toggleWatch = (id)=>{
        const copyarr = [...movies]
        const findId = copyarr.find((item)=> item.id === id)
        console.log(findId);
        copyarr
    }


    return (
        <div className='flex flex-col gap-4'>
            <Header/>
            <MovieForm addMovie={addMovie}/>
            <FilterMovie/>
            <MovieLists movies={movies} removeMovie={removeMovie} toggleWatch={toggleWatch}/>
        </div>
    );
};

export default Home;