import React from 'react';
import './Food.css'

const Food = (props) => {
    const{img,name,ratings,price} = props.food;
    const{handleForOrder} = props;
    return (
        <div className='food'>
            <img src={img} alt="" />
           <div className='food-info'>
           <h2> {name}</h2>
            <p>Price: {price} taka</p>
            <p><small>Ratings: {ratings}</small></p>
        
           </div>
           <button onClick={()=>handleForOrder(props.food)} className='btn'>Click For Order</button>

        </div>
    );
};

export default Food;