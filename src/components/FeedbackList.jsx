import { useContext} from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";
function FeedbackList() {
    const { feedbackData, isLoading } = useContext(FeedbackContext);


    return (isLoading) ? <Spinner /> : (
        <div>
            {feedbackData.map((el) => {
                return <FeedbackItem key={el._id} item={el} />
            })}
        </div>
    )

}

FeedbackList.defaultProps = [
    { rating: 1 }
]


export default FeedbackList;