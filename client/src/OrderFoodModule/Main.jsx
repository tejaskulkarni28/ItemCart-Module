import React from "react";
import './main.css'

const Main = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="row">
                    <div className="col"><button className="btn btn-primary">Breakfast</button></div>
                    <div className="col"><button className="btn btn-primary">Main Course</button></div>
                    <div className="col"><button className="btn btn-primary">Specials</button></div>
                </div>
            </div>
        </div>
    )
}

export default Main