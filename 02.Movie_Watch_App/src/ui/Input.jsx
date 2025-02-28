// eslint-disable-next-line react/prop-types
const Input = ({_onChange, name, value, type, placeholder, style}) => {
    return (
        <>
            <input onChange={_onChange} name={name} value={value} type={type} placeholder={placeholder} className={style}/> 
        </>
    );
};

export default Input;