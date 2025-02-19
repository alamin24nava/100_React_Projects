import { useState } from "react";

const MovieForm = ({addMovie}) => {
    const [movieData, setMovieData] =useState({
        title:"",
        platform:"Select an OOT"
    })
    const handleChange1 = (e)=>{
        const key = e.target.name;
        const value = e.target.value;
        setMovieData({...movieData, [key]:value})
    }
    return (
        <>
        <form className='flex gap-2'>
            {/* <input onChange={handleChange} name="title" type="text" value={movieTitle} placeholder="Type Here Movie Name..." className="input w-full" /> */}
            <input onChange={handleChange1} name="title" value={movieData.title} type="text" placeholder="Type Here Movie Name..." className="input w-full"/>
            <select onChange={handleChange1} name="platform" value={movieData.platform} className="select">
                <option disabled={true}>Select an OOT</option>
                <option value="Netflix">Netflix</option>
                <option value="Amazon Prime">Amazon Prime</option>
                <option value="Hulu">Hulu</option>
                <option value="Apple TV">Apple TV</option>
                <option value="HBO Now">HBO Now</option>
                <option value="Peacock">Peacock</option>
            </select>
            <button onClick={(e)=>addMovie(e,movieData, setMovieData)} className="btn btn-soft btn-primary">Add List </button>
        </form>
        </>
    );
};

export default MovieForm;