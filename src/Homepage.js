import { useState } from "react";

export function Homepage(){

  const [svalue, getsvalue] = useState("");
    return(
      <div className="homepage">

        <div className="foryou">
          For you, for-ever!
        </div>

        <div className="search">
        <input className="search-bar" type="text" placeholder="Search here"  />

        </div>
      </div>
    );
  }