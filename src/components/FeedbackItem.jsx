import Card from "./shared/Card";
import PropType from "prop-types";

function FeedbackItem({ rating, text }) {


    return (
        <Card>
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    rating: PropType.number.isRequired,
    text: PropType.string.isRequired
}

export default FeedbackItem;