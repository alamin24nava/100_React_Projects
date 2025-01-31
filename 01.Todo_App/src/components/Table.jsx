const Table = ({data}) => {
    console.log(data);
    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Status</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, inx)=>{
                                return(
                                    <tr key={inx}>
                                        <th>{inx+1}</th>
                                        <td><input type="checkbox" className="checkbox checkbox-primary" /></td>
                                        <td>{item.title}</td>
                                        <td>
                                            <div className="flex gap-3">
                                                <button className="btn btn-xs btn-soft">Edit</button>
                                                <button className="btn btn-xs btn-error">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
