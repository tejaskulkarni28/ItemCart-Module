import React, { useEffect } from "react";
import { useState } from "react";
import testJson  from "../../api/test.json";
import { useDispatch } from "react-redux";
import { incrementItem, decrementItem } from "../../redux/slices/cartSlice";
import { useSelector } from "react-redux";

const List = (props) => {

    const[json_data, setJsonData] = useState([])
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux store

    useEffect(() => {
        const selectedList = testJson[0]?.list[props.type];

        if (selectedList) {
            const mappedJson = testJson[0].list[props.type].map((item)=>{
            const cartItem = cartItems.find((cartItem)=> cartItem.id === item.id)
            return{
                ...item,
                // return count if present in the redux initialState or just return the thing
                count: cartItem ? cartItem.count : 0
            }
          })
          setJsonData(mappedJson)
        }
      }, [props.type, cartItems]);

      const handleIncrement = (item)=>{
        // Dispatch the increment action with the selected item
        dispatch(incrementItem(item))
      }
      const handleDecrement = (item)=>{
        // Dispatch the decrement action with the selected item
        dispatch(decrementItem(item))
      }
    return (
        <div className="container">
            <div className="content">
                {
                    json_data.map((value, index) => (
                        <div className="row" key={index}>
                            <div className="col-4">
                                <p>{value.name} {value.cost}</p>
                            </div>
                            <div className="col-2">
                                <button onClick={()=>{handleDecrement(value)}}>-</button>
                            </div>
                            <div className="col-1">
                                <p>{value.count}</p>
                            </div>
                            <div className="col-1">
                                <button  onClick={()=>{handleIncrement(value)}}>+</button>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default List;