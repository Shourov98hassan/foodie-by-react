import React, { useEffect, useState } from 'react';
import { addToDb, getStoredOrder } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Foods.css'

const Foods = () => {
    const[foods,setFoods] = useState([]);
    const[order,setOrder] = useState([]);
    useEffect(()=>{
        fetch('items.json')
        .then(res=>res.json())
        .then(data=>setFoods(data));
    },[]);

    useEffect(()=>{
        const storedCart = getStoredOrder();
        const savedCart = [];
        console.log(storedCart);
        for(const id in storedCart){
           const addedFood = foods.find(food=>food.id ===id)
           if(addedFood){
               const quantity = storedCart[id];
               addedFood.quantity = quantity;
               savedCart.push(addedFood);
           }
        }
        setOrder(savedCart);
    },[foods])




    const handleForOrder=(selectedFood)=>{
        console.log(selectedFood);
        let newOrder = [];
        const exists = order.find(food => food.id === selectedFood.id);
        if(!exists){
            selectedFood.quantity = 1;
            newOrder = [...order,selectedFood];
        }
        else{
            const rest = order.filter(food => food.id !== selectedFood.id);
            exists.quantity = exists.quantity + 1;
            newOrder = [...rest, exists];
        }
        
        setOrder(newOrder);
        addToDb(selectedFood.id);

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
              <Cart
              order = {order}
              ></Cart>

            </div>
            
        </div>
    );
};

export default Foods;