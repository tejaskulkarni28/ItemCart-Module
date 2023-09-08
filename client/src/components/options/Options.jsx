import React, { useState } from "react";
import List from "../Lists/List";

const Options = () => {
  const types = {
    type1: "breakfast",
    type2: "maincourse",
    type3: "specials"
  };

  const [option, setOption] = useState([]);

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
    </div>
  );
};

export default Options;
