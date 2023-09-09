import React, { useState } from "react";
import List from "../Lists/List";
import { useNavigate } from "react-router-dom";

const Options = () => {
  const navigate = useNavigate()
  const types = {
    type1: "breakfast",
    type2: "maincourse",
    type3: "specials"
  };

  // breakfast is the default one
  const [option, setOption] = useState(["breakfast"]);
  const handleNext = ()=>{
    navigate('/order/cart')
  }

  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col">
              <button onClick={() => setOption(types.type1)}>Breakfast Menu</button>
            </div>
            <div className="col">
              <button onClick={() => setOption(types.type2)}>Main Course</button>
            </div>
            <div className="col">
              <button onClick={() => setOption(types.type3)}>Special Menu</button>
            </div>
          </div>
        </div>
      </div>
      <List type={option} />
      <button onClick={()=>{handleNext()}}>Next</button>
    </div>
  );
};

export default Options;
