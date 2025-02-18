import React from 'react';
import MovieLists from '../components/MovieLists';
import Header from "../components/Header"
import FilterMovie from "../components/FilterMovie"
import MovieForm from '../components/MovieForm';

const Home = () => {
    return (
        <div className='flex flex-col gap-4'>
            <Header/>
            <MovieForm/>
            <FilterMovie/>
            <MovieLists/>
        </div>
    );
};

export default Home;