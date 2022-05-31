import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Foods.css'

const Foods = () => {
    const[foods,setFoods] = useState([]);
    useEffect(()=>{
        fetch('items.json')
        .then(res=>res.json())
        .then(data=>setFoods(data));
    },[]);

    const handleForOrder=()=>{
        console.log('clicked')

    }
    return (
        <div className='foods'>
           
            <div className="foods-container">
            
               {
                   foods.map(food=><Food
                   key={food.id}
                   food={food}
                   handleForOrder={handleForOrder}
                   ></Food>)
               }

            </div>
            <div className="cart-container">
                <h1>Order Summery</h1>

            </div>
            
        </div>
    );
};

export default Foods;