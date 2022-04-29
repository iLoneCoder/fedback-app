import FeedbackItem from "./FeedbackItem";
import PropType  from "prop-types";

function FeedbackList({ feedbackData }) {
    // console.log(feedbackData);
    return (
        <ul>
            {feedbackData.map((el) => {
                return <FeedbackItem key={el.id} rating={el.rating} text={el.text} />
            })}
        </ul>
    )

}

FeedbackList.defaultProps = [
    { rating: 1 }
]

FeedbackList.propTypes = {
    feedbackData: PropType.arrayOf(PropType.shape({
        id: PropType.number.isRequired,
        rating: PropType.number.isRequired,
        text: PropType.string.isRequired
    }))
}

export default FeedbackList;