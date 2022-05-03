import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedbackData, setFeedbackData] = useState([
        {
            id: 1,
            text: "Keep it up",
            rating: 7
        },
        {
            id: 2,
            text: "Good job, well done!",
            rating: 9
        }
    ]
    );

    const [editedFeedback, setEditedFeedback] = useState("");

    const addFeedback = (newFeedback) => {
        if (editedFeedback !== undefined) {
            const index = feedbackData.findIndex((el) => el.id === editedFeedback.id)
            if (index !== -1) {
                console.log("index was found");
                feedbackData[index] = newFeedback;
                // console.log( feedbackData[index], editedFeedback);
                setFeedbackData([...feedbackData]);
                setEditedFeedback("");
            } else {
                console.log("index not found");
                setFeedbackData([newFeedback, ...feedbackData]);
            }
        } else {
            setFeedbackData([newFeedback, ...feedbackData]);
        }

    }

    const handleDelete = (id) => {
        const newFeedbackData = feedbackData.filter((el) => el.id !== id);
        setFeedbackData(newFeedbackData);
    }

    const editFeedback = (e) => {
        setEditedFeedback(e);
    }

    return <FeedbackContext.Provider value={{ feedbackData, handleDelete, addFeedback, editFeedback, editedFeedback }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;