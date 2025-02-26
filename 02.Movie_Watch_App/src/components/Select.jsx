import React from 'react';

const Select = ({options, handleChange, name, value, defaultValue}) => {
    return (
        <>
        {/* <div>
            <input type="text" />
        </div> */}
           <select onChange={handleChange} name={name} value={value} className="select">
           <input type="text" />
                <option disabled={true} value="">{defaultValue}</option>
                {
                    options.map((option, index)=>
                        <option key={index} value={option}>{option}</option>
                    )
                }
            </select>
        </>
    );
};

export default Select;