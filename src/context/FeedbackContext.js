import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedbackData, setFeedbackData] = useState([
        {
            id: 1,
            text: "Keep it up",
            rating: 7
        }
    ]
    );

    
    const addFeedback = (newFeedback) => {
        setFeedbackData([newFeedback, ...feedbackData]);
    }

    const handleDelete = (id) => {
        const newFeedbackData = feedbackData.filter((el) => el.id !== id);
        setFeedbackData(newFeedbackData);
    }

    return <FeedbackContext.Provider value={{ feedbackData, handleDelete, addFeedback }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;