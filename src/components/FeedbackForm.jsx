import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import FeedbackRating from "./FeedbackRating";

function FeedbackForm({addFeedback}) {
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
   
    const handleRating = (newRating) => {
        setRating(newRating);
    }

    const handleFeedback = (e) => {
        e.preventDefault();
        const newFeedback = {
            text,
            rating
        }
        newFeedback.id = uuidv4();
        addFeedback(newFeedback);
    }

   return <Card>
        <form onSubmit={handleFeedback}>
            <h2>How would you rate our service ?</h2>
            <FeedbackRating handleRating={handleRating}/>
            <div className="input-group">
                <input onChange={(e) => { handleText(e) }} type="text" placeholder="write a review" value={text} />
                <Button type="submit" isDisabled={isDisabled}>
                    Send
                </Button>
            </div>

        </form>
    </Card>
}

export default FeedbackForm;