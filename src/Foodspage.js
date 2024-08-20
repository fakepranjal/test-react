import axios from "axios";
import { useState } from "react";


export default function Foods(){
  const [foodQuery, setfoodQuery] = useState("");
  const [nutrientArray, setnutrientArray] = useState([]);
  
  async function getFoodInfo(){
    
    const response = await axios({
      method: 'GET',
      url: `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=LqMKY6O0jpS3FKq1wgFYgHGHtHc7OPiNTFAgYwbu&query=${foodQuery}`,
    });
    const ResultObj = response.data['foods'][0]['foodNutrients'];
    setnutrientArray(ResultObj.map(obj => [obj.nutrientName, obj.nutrientNumber,obj.unitName]));
  }

    return(

      <div className="foodspage">
        <h1 className="food-text">Enter food and get nutritional content</h1>
        <div className="foodinfo">
          <input className="foodname-box" placeholder="Enter food item" value={foodQuery} onChange={(e)=>setfoodQuery(e.target.value)} type="text" />
          <button className="find-btn" onClick={getFoodInfo}>Find</button>
          
          <div className="nutrient-list">
            {nutrientArray.map((innerArray, outerIndex) => (
            <div key={outerIndex}>
              {innerArray.map((element, innerIndex) => (
              <p key={innerIndex}>{element}</p>
              ))}
            </div>
      ))}
    </div>
        </div>
      </div>
    );
  }