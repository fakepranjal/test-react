import axios from "axios";

export function Contact(){


  async function DrugName(){

    const response = await axios({
      method:'GET',
      url: 'https://api.fda.gov/drug/ndc.json?search=generic_name:"cetirizine"&limit=5'
    });
    console.log(response.data);
  }

    return(
      <div className="contactpage">
      <h1>Baad may</h1>
      <button onClick={DrugName}>Click</button>
      </div>
    );
  }