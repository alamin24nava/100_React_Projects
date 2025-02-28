import { useState } from "react";
import Select from "../ui/Select";
import Button from "../ui/Button";
import Input from "../ui/Input";

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
            <Input _onChange={handleChange} name="title" value={movieData.title} type="text" placeholder="Type Here Movie Name..." style="input w-full"/>
            <Select handleChange={handleChange} name="platform" value={movieData.platform} defaultValue="Select An OTT" options={platforms}/>
            <Select handleChange={handleChange} name="language" value={movieData.language} defaultValue="Select a Languages" options={languages}/>
            <Button _onClick={(e)=>addMovie(e,movieData, setMovieData)} name="Add List" style="btn btn-soft btn-primary"/>
        </form>
        </>
    );
};

export default MovieForm;