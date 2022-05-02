import { Link } from "react-router-dom";
import Card from "../components/shared/Card";
function AboutPage() {
    return (<div className="container">
        <Card>
            <h4>This is app where you can leave feedback about product or service!</h4>
            <p>version 10.0.1</p>
            <Link to="/" className="linkstyle" style={{color:"black"}}>go back to home page</Link>
        </Card>
    </div>)
}

export default AboutPage;