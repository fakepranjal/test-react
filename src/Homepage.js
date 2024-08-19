import { useState } from "react";
import axios from "axios";

export function Homepage(){
  
  const [DrugName, setDrugName] = useState("");
  const [GenName, setGenName] = useState("");

  async function genericName(){
    setGenName("loading");
    const response = await axios({
      method: 'GET',
      url: 'https://drug-info-and-price-history.p.rapidapi.com/1/genericname',
      params: {drug: DrugName},
      headers: {'x-rapidapi-key': '04ca33ade7msh4cc2ebfe9f01526p1eaaa8jsn7976f93e70e3',
                'x-rapidapi-host': 'drug-info-and-price-history.p.rapidapi.com'}
    });

    setGenName((response.data['generic_name']));
  }


    return(
      <div className="homepage">
        <div className="foryou">
          For you, for-ever!
        </div>

        <div className="search">
        <input value={DrugName}  onChange={(e)=>setDrugName(e.target.value)} className="search-bar" type="text" placeholder="Search your medicine here"  />
        <div className="generic-name"><pre>{GenName}</pre></div>
        <input onClick={()=> { genericName(); } } type="submit" className="submit"/>

        </div>
      </div>
    );
  }