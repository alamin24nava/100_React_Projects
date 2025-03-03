import { useState } from 'react';
import toast from "react-hot-toast";
import FilterMovie from "../components/FilterMovie";
import Header from "../components/Header";
import MovieForm from '../components/MovieForm';
import MovieLists from '../components/MovieLists';


const Home2 = () => {
    const [filter, setFilter] = useState("all");
    const [movies, setMovies] = useState([
        {
            id:1,
            title:"A simple star rating component for your React projects ",
            platform:"netflix",
            status:true,
            rating:5
        },
        {
            id:23,
            title:"A simple star rating component for your React projects ",
            platform:"netflix",
            status:false,
            rating:3
        },
        {
            id:2,
            title:"A simple star rating component for your React projects ",
            platform:"hulu",
            status:false,
            rating:2
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


    const handleFilter =(type)=> setFilter(type);


    const filteredMovies = movies.filter((movie) => {
        let filterDecision;
        if (filter === "all") {
            filterDecision = true;
        } else if (filter === "watched") {
            filterDecision = movie.status;
        } else if (filter === "unwatch") {
          filterDecision = !movie.status;
        }
        return filterDecision;
    });

    return (
        <div className='flex flex-col gap-4'>
            <Header/>
            <MovieForm addMovie={addMovie}/>
            <FilterMovie _onClick={handleFilter}/>
            <MovieLists movies={filteredMovies} removeMovie={removeMovie} toggleWatch={toggleWatch}/>
        </div>
    );
};

export default Home2;