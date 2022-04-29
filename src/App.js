import {useState} from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/feedbackData";

function App() {
    const [feedbackData, setFeedbackData] = useState(FeedbackData);
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackList feedbackData={feedbackData}/> 
            </div>
        </>

    )


}
export default App;