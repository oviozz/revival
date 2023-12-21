

function Button({ label, onClick, className}){

    return (
        <button className={`${className} text-white hover:bg-gray-800 bg-black py-2 px-3.5 rounded-md`} onClick={onClick}>
            {label}
        </button>
    );

}

export default Button;