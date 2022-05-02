import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function MoveToAbout() {
    return <div className="about">
        <Link to="/about" className="linkstyle" >   <FaQuestion /> </Link>

    </div>
}

export default MoveToAbout;