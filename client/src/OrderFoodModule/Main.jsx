import React from "react";
import './main.css'
import List from "./OrderListModule/List";
import { useState } from "react";

const Main = () => {
    const [type, setType] = useState(null)
    function selectSection(type){
        setType(type)
    }
    return (
        <div className="container">
            <div className="content">
                <div className="row">
                    <div className="col"><button className="btn btn-primary" onClick={()=>{selectSection("breakfast")}}>Breakfast</button></div>
                    <div className="col"><button className="btn btn-primary" onClick={()=>{selectSection("maincourse")}}>Main Course</button></div>
                    <div className="col"><button className="btn btn-primary" onClick={()=>{selectSection("specials")}}>Specials</button></div>
                </div>
            </div>
            <List type={type}/>
        </div>
    )
}

export default Main