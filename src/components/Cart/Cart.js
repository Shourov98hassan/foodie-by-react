import React from 'react';
import './Cart.css'

const Cart = ({order}) => {
    console.log(order);

    let total = 0;
    let quantity = 0;
    for(const food of order){
        quantity = quantity + food.quantity;
        total = total + food.price * food.quantity;
       
    }
    const tax =parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + tax;
    
    return (
        <div className='order-summery'>
              <h1>Order Summery</h1> <hr />
                <p>Selected Items:{quantity}</p>
                <p>Total Price: {total} Taka</p>
                <p>Tax: {tax} Taka</p>
                <h5>Grand Total: {grandTotal} Taka</h5>

               
        </div>
    );
};

export default Cart;