// eslint-disable-next-line react/prop-types
const Button = ({name, style, _onClick}) => {
    return (
        <>
            <button onClick={_onClick} className={style}>{name}</button>
        </>
    );
};

export default Button;