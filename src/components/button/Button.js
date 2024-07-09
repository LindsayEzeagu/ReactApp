import "./Button.css";

function Button(props){
    return (
        <button
        className="btn"
        styles={{
            backgroundColor: props.buttonBackground,
            color: props.buttonColor,
        }}
    >
        {props.text}
    </button>
    );
}

export default Button;