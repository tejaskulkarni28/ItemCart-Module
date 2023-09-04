import React from "react";

const List = ()=>{
    return(
        <div className="row bg-primary align-items-center" style={{ padding: '2%', borderRadius: '5px', margin:'1%' }}>
        <div className="col-5 bg-primary"><p className="bg-primary" style={{ margin: 'auto', padding: '10px', color: 'white', fontSize: '110%' }}>Pohe</p></div>
        <div className="col-2 bg-primary"><p className="bg-primary" style={{ margin: 'auto', padding: '10px', color: 'white', fontSize: '110%' }}></p></div>
        <div className="col-2 bg-primary"><p className="bg-primary" style={{ margin: 'auto', padding: '10px', color: 'white', fontSize: '110%' }}>₹20</p></div>
        <div className="col-3 bg-primary"><button className="btn-light" style={{ margin: 'auto', padding: '4px', borderRadius: '10px', fontSize: '110%',width:'100%' }}>Add +</button></div>
    </div>
    )
}

export default List;