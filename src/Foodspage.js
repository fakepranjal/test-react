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
    setnutrientArray(ResultObj.map(obj => [obj.nutrientName, obj.nutrientNumber]));
    console.log(nutrientArray);
  }

    return(

      <div className="foodspage">
        <input value={foodQuery} onChange={(e)=>setfoodQuery(e.target.value)} type="text" />
        <button onClick={getFoodInfo}>Here</button>
        <p>{nutrientArray}</p>
      </div>
    );
  }