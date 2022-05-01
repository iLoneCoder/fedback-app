import FeedbackItem from "./FeedbackItem";
import PropType  from "prop-types";

function FeedbackList({ feedbackData, handleDelete }) {
    // console.log(feedbackData);
    return (
        <div>
            {feedbackData.map((el) => {
                return <FeedbackItem key={el.id} item={el} handleDelete={(id) => {handleDelete(id)}}/>
            })}
        </div>
    )

}

FeedbackList.defaultProps = [
    { rating: 1 }
]

FeedbackList.propTypes = {
    feedbackData: PropType.arrayOf(PropType.shape({
        // id: PropType.number.isRequired,
        rating: PropType.number.isRequired,
        text: PropType.string.isRequired
    }))
}

export default FeedbackList;