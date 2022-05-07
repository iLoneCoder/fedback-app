import image from "../assets/Spinner-1s-200px.gif";

function Spinner() {
    return <div style={{width:"100%"}}>
        <img src={image} alt="loading..." style={
            {
                width: "100px",
                height: "100px",
                marginLeft: "44%",
                backgroundColor: "red"
            }} />


    </div>

}

export default Spinner;