import {useState} from "react";

function FeedbackRating({handleRating}) {
    const [selected, setSelected] = useState(10);
    const handleSelect = (e) => {
        setSelected(+e.target.value);
        handleRating(+e.target.value);
    }
    return <ul className="rating">
           <li>
               <input type="radio" id="num1" name="rating" onChange={handleSelect} checked={selected===1} value="1"/>
               <label htmlFor="num1">1</label>
           </li>
           <li>
               <input type="radio" id="num2" name="rating"  onChange={handleSelect} checked={selected===2} value="2"/>
               <label htmlFor="num2">2</label>
           </li>
           <li>
               <input type="radio" id="num3" name="rating" onChange={handleSelect} checked={selected===3} value="3"/>
               <label htmlFor="num3">3</label>
           </li>
           <li>
               <input type="radio" id="num4" name="rating" onChange={handleSelect} checked={selected===4} value="4" />
               <label htmlFor="num4">4</label>
           </li>
           <li>
               <input type="radio" id="num5" name="rating" onChange={handleSelect} checked={selected===5} value="5" />
               <label htmlFor="num5">5</label>
           </li>
           <li>
               <input type="radio" id="num6" name="rating" onChange={handleSelect} checked={selected===6} value="6"/>
               <label htmlFor="num6">6</label>
           </li>
           <li>
               <input type="radio" id="num7" name="rating" onChange={handleSelect} checked={selected===7} value="7" />
               <label htmlFor="num7">7</label>
           </li>
           <li>
               <input type="radio" id="num8" name="rating" onChange={handleSelect} checked={selected===8} value="8" />
               <label htmlFor="num8">8</label>
           </li>
           <li>
               <input type="radio" id="num9" name="rating" onChange={handleSelect} checked={selected===9} value="9"/>
               <label htmlFor="num9">9</label>
           </li>
           <li>
               <input type="radio" id="num10" name="rating" onChange={handleSelect} checked={selected===10} value="10" />
               <label htmlFor="num10">10</label>
           </li>
       </ul>
  
}

export default FeedbackRating;