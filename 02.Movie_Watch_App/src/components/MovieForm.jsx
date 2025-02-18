const MovieForm = () => {
    return (
        <form className='flex gap-2'>
            <input name="title" type="text" placeholder="Type Here Movie Name..." className="input w-full" />
            <select name="oot" defaultValue="Select OOT" className="select">
                <option disabled={true}>Select OOT</option>
                <option value="Netflix">Netflix</option>
                <option value="Amazon Prime">Amazon Prime</option>
                <option value="Disney">Disney+</option>
                <option value="Hulu">Hulu</option>
                <option value="Apple TV">Apple TV</option>
                <option value="HBO Now">HBO Now</option>
                <option value="Peacock">Peacock</option>
            </select>
            <button className="btn btn-soft btn-primary">Add List </button>
        </form>
    );
};

export default MovieForm;