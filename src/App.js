import {useState} from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/feedbackData";

function App() {
    const [feedbackData, setFeedbackData] = useState(FeedbackData);
    const handleDelete = (id) => {
       const newFeedbackData = feedbackData.filter((el) => el.id !== id);
        setFeedbackData(newFeedbackData);
    }
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackList feedbackData={feedbackData} handleDelete={(id) => {handleDelete(id)}}/> 
            </div>
        </>

    )


}
export default App;