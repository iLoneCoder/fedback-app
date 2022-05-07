import { createContext, useState, useEffect } from "react";

const URL = "http://localhost:8080";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(URL + "/getFeeds")
            .then(response => response.json())
            .then((data) => {
                // console.log(data);
                setFeedbackData(data.posts);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const fetchAddFeedback = (newFeedback) => {
        // console.log(newFeedback);

        fetch(URL + "/postFeed", {
            method: "POST",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFeedback)
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFeedbackData([data.newFeedback, ...feedbackData]);
            })
            .catch()
    }

    const fetchUpdateFeedback = (updatedFeedback, index) => {

        fetch(URL + "/updateFeed", {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedFeedback)
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                feedbackData[index] = data.updatedFeedback;
                // console.log( feedbackData[index], editedFeedback);
                setFeedbackData([...feedbackData]);
                setEditedFeedback("");
            })
            .catch(() => {

            })
    }

    const fetchDeleteFeedback = (_id) => {
        fetch(URL + "/deleteFeed", {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id: _id })
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const newFeedbackData = feedbackData.filter((el) => {
                    return el._id.toString() !== data._id.toString()
                })
                setFeedbackData(newFeedbackData);
            })
            .catch()
    }
    const [editedFeedback, setEditedFeedback] = useState("");

    const addFeedback = (newFeedback) => {
        if (editedFeedback !== "") {
            const index = feedbackData.findIndex((el) => el._id.toString() === editedFeedback._id.toString())
            if (index !== -1) {
                newFeedback._id = feedbackData[index]._id;
                fetchUpdateFeedback(newFeedback, index);
            } else {
                console.log("index not found");
                fetchAddFeedback(newFeedback);
            }
        } else {
            // console.log("from here")
            fetchAddFeedback(newFeedback);
            setEditedFeedback("");
        }

    }

    const handleDelete = (id) => {
        fetchDeleteFeedback(id);
    }

    const editFeedback = (e) => {

        setEditedFeedback(e);
    }

    return <FeedbackContext.Provider value={{ feedbackData, editedFeedback, isLoading, handleDelete, addFeedback, editFeedback }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;