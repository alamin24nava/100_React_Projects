import MovieLists from '../components/MovieLists';
import Header from "../components/Header"
import FilterMovie from "../components/FilterMovie"
import MovieForm from '../components/MovieForm';
import { useState } from 'react';
import toast from "react-hot-toast";
import Button from '../ui/Button';


const Home = () => {
    const [movies, setMovies] = useState([
        {
            id:1,
            title:"A simple star rating component for your React projects ",
            platform:"netflix",
            status:true
        },
        {
            id:23,
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
        if (title.trim() == "" || platform.trim() == "") return toast.error("Please Provide Title, Languages & OTT")
        const newMovie = {
            id:crypto.randomUUID(),
            title,
            platform,
            language,
            status:false,
            rating:null
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
        const findId = movies.map((item)=> item.id === id ? {...item, status: !item.status} : item)
        setMovies(findId)
    }

    const handleFilter =(type)=>{
        // const filterMovies =  movies.filter((item)=> item.status === false)
        const as = [...movies]
        if(type == "watched"){
            const filterMovies =  as.filter((item)=> item.status === true)
            setMovies(filterMovies)
        }else if(type == "unwatch"){
            const filterMoviesFalse =  as.filter((item)=> item.status === false)
            setMovies(filterMoviesFalse)
        }else if(type == "all"){
             setMovies(...movies)
        }
        
    }

    return (
        <div className='flex flex-col gap-4'>
            <Header/>
            <MovieForm addMovie={addMovie}/>
            <FilterMovie _onClick={handleFilter}/>
            <MovieLists movies={movies} removeMovie={removeMovie} toggleWatch={toggleWatch}/>
        </div>
    );
};

export default Home;