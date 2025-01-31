const Footer = () => {
    return (
        <div className="flex gap-2 justify-between mt-8">
            <div> Total Todos <span>10</span></div>
            <div className="flex gap-2">
                <span>Sort:</span>
                <button className="btn btn-xs btn-soft">All</button>
                <button className="btn btn-xs btn-soft">Complete</button>
                <button className="btn btn-xs btn-soft">Incomplete</button>
            </div>
        </div>
    );
};

export default Footer;