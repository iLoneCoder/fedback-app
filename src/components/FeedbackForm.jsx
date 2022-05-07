import { useContext, useState, useEffect } from "react";
//import { v4 as uuidv4 } from 'uuid';
import Card from "./shared/Card";
import Button from "./shared/Button";
import FeedbackRating from "./FeedbackRating";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
    
    const [text, setText] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [rating, setRating] = useState(10);
    const handleText = (e) => {
        const review = e.target.value;
        if (review.trim().length >= 0 && review.trim().length < 10) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
        setText(review);
    }

    const { addFeedback, editedFeedback } = useContext(FeedbackContext);

    const handleRating = (newRating) => {
        setRating(newRating);
    }

    const handleFeedback = (e) => {
        e.preventDefault();
        const newFeedback = {
            text,
            rating
        }
        // newFeedback._id = uuidv4();
        setText("");
        setIsDisabled(true);
        addFeedback(newFeedback);

    }

    useEffect(() => {
        // console.log("empty or not", editedFeedback)
        setText(editedFeedback.text);
        if (editedFeedback.text) {
            if (editedFeedback.text.length >= 10) {
                setIsDisabled(false);
            } else {
                setIsDisabled(true);
            }
        } else {
            setIsDisabled(true);
        }
    }, [editedFeedback])

    return <Card>
        <form onSubmit={handleFeedback}>
            <h2>How would you rate our service ?</h2>
            <FeedbackRating handleRating={handleRating} />
            <div className="input-group">
                <input onChange={(e) => { handleText(e) }} type="text" placeholder="write a review" value={text || ""} />
                <Button type="submit" isDisabled={isDisabled}>
                    Send
                </Button>
            </div>

        </form>
    </Card>
}

export default FeedbackForm;