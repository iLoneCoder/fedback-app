import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/feedbackData";
import FeedbackStat from "./components/FeedbackStat";
import FeedbackForm from "./components/FeedbackForm";

function App() {
    const [feedbackData, setFeedbackData] = useState(FeedbackData);
    const handleDelete = (id) => {
        const newFeedbackData = feedbackData.filter((el) => el.id !== id);
        setFeedbackData(newFeedbackData);
    }

    const handleAdd = (newFeedback) => {
        setFeedbackData([newFeedback, ...feedbackData]);
    }
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm addFeedback={handleAdd} />
                <FeedbackStat feedbackData={feedbackData} />
                <FeedbackList feedbackData={feedbackData} handleDelete={(id) => { handleDelete(id) }} />
            </div>
        </>

    )


}
export default App;