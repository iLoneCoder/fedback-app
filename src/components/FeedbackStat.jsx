function FeedbackStat({ feedbackData }) {
    const getAvarage = ({feedbackData}) => {
        let avarage = feedbackData.reduce((acc, cur) => acc+cur.rating, 0) / feedbackData.length;  
        avarage = isNaN(avarage.toFixed(1)) ? 0:avarage.toFixed(1);
        return avarage;
    }
    return (
        <div className="stats">
            <h4>reviews {feedbackData.length}</h4>
            <h4>Avarage rating {getAvarage({feedbackData})}</h4>
        </div>
    )
}

export default FeedbackStat;