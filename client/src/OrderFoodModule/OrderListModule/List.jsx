import React, { useEffect, useState } from "react";
import jsonData from "../../api/test.json"
import "./list.css"

const List = (props)=>{
    const[data, setData] = useState([]);
    useEffect(()=>{
            // Check if the data is available before setting it
    if (jsonData[0]?.list[props.type]) {
        setData(jsonData[0].list[props.type]);
      }
        console.log(jsonData[0].list[props.type])
    },[props.type])
    return(
        <div style={{marginTop:'5%' }}>
        {data.map((value, index)=>(
        <div key={index} className="row bg-primary align-items-center" style={{ padding: '2%', borderRadius: '5px', margin:'1%' }}>
        <div className="col-4 bg-primary"><p className="bg-primary" style={{ margin: 'auto', padding: '10px', color: 'white', fontSize: '110%' }}>{value.name}</p></div>
        <div className="col-2 bg-primary"><p className="bg-primary" style={{ margin: 'auto', padding: '10px', color: 'white', fontSize: '110%' }}></p></div>
        <div className="col-3 bg-primary"><p className="bg-primary" style={{ margin: 'auto', padding: '10px', color: 'white', fontSize: '110%' }}>₹{value.cost}</p></div>
        <div className="col-1 bg-primary"><button className="btn btn-light" style={{ margin: 'auto', padding: '4px', borderRadius: '10px', fontSize: '110%',width:'100%' }}>-</button></div>
        <div className="col-1 bg-primary"><p className="btn-light" style={{ margin: 'auto', padding: '4px', borderRadius: '10px', fontSize: '110%',width:'100%' }}>0</p></div>
        <div className="col-1 bg-primary"><button className="btn btn-light" style={{ margin: 'auto', padding: '4px', borderRadius: '10px', fontSize: '110%',width:'100%' }}>+</button></div>
    </div>
    ))}
    </div>
    )
}

export default List;