import React, { useEffect } from "react";
import JsonData from "../../api/test.json";
import { useState } from "react";

const List = (props) => {
    const [json, setJson] = useState([]);
    useEffect(() => {
        if (JsonData[0]?.list[props.type]) {
            setJson(JsonData[0].list[props.type]);
        }
    }, [props.type])
    return (
        <div className="container">
            <div className="content">
                {
                    json.map((value, index) => (
                        <div className="row">
                            <div className="col-4">
                                <p key={index}>{value.name} {value.cost}</p>
                            </div>
                            <div className="col-2">
                                <button>-</button>
                            </div>
                            <div className="col-1">
                                <p>0</p>
                            </div>
                            <div className="col-1">
                                <button>+</button>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default List;