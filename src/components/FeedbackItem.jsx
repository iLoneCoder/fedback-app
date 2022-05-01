import Card from "./shared/Card";
import PropType from "prop-types";
import {FaTimes} from "react-icons/fa";
function FeedbackItem({item,handleDelete}) {
    // const handleDelete = (item) => {
    //     console.log(item)
    // }

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => {handleDelete(item.id)}} className="close"><FaTimes  /></button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropType.shape({
        // id: PropType.number,
        rating: PropType.number.isRequired,
        text: PropType.string.isRequired
    })
}

export default FeedbackItem;