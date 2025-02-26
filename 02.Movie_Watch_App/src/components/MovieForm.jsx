import { useState } from "react";
import Select from "./Select";

const MovieForm = ({addMovie}) => {
    const [movieData, setMovieData] =useState({
        title:"",
        platform:"",
        language:""
    })
    const handleChange = (e)=>{
        const key = e.target.name;
        const value = e.target.value;
        setMovieData({...movieData, [key]:value})
    }
    const platforms =["Netflix","Amazon Prime", "Hulu", "Apple TV","HBO Now","Peacock"]
    const languages = ["China","Bangla", "Hindi"]
    return (
        <>
        <form className='flex gap-2'>
            <input onChange={handleChange} name="title" value={movieData.title} type="text" placeholder="Type Here Movie Name..." className="input w-full"/>
            <Select handleChange={handleChange} name="platform" value={movieData.platform} defaultValue="Select An OTT" options={platforms} />
            <Select handleChange={handleChange} name="language" value={movieData.language} defaultValue="Select a Languages" options={languages} />
            <button onClick={(e)=>addMovie(e,movieData, setMovieData)} className="btn btn-soft btn-primary">Add List </button>
        </form>
        </>
    );
};

export default MovieForm;