import { useContext } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
    const { handleDelete, editFeedback } = useContext(FeedbackContext);

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => {editFeedback(item)}} type="button" className="edit"><FaEdit /></button>
            <button onClick={() => { handleDelete(item._id) }} type="button"  className="close"><FaTimes /></button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}


export default FeedbackItem;