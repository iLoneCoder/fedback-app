import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
    const { feedbackData } = useContext(FeedbackContext);
    return (
        <div>
            {feedbackData.map((el) => {
                return <FeedbackItem key={el.id} item={el} />
            })}
        </div>
    )

}

FeedbackList.defaultProps = [
    { rating: 1 }
]


export default FeedbackList;