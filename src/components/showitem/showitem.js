import React from 'react';


const ShowItem = (props) => {
    const {items,deleteitem } = props;
    let length = items.length;
    const listitems = length? (items.map(
        item => {
            return (
                <div key={item.id} className="listItem">
                    
                    <span className="name">
                        {item.name}
                    </span>
                    <span className="age">
                        {item.age}
                    </span>
                    <span onClick={()=>deleteitem(item.id)} className="icon "> 
                        &times;
                    </span>
                </div>
            )
        }
    )):(<p>there is no item to show</p>)
    return (
        <div className="listItem">
            <span className="name title">Name</span>
            <span className="age title">Age</span>
            <span className="icon title">Action</span>
            {listitems}
        </div>
    )
}
export default ShowItem;