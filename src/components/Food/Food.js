import React from 'react';
import './Food.css'

const Food = (props) => {
    const{img,name,ratings,sellers,price} = props.food;
    return (
        <div className='food'>
            <img src={img} alt="" />
            <h2> {name}</h2>
            <p>Price: {price} taka</p>
            <p><small>Ratings: {ratings}</small></p>

        </div>
    );
};

export default Food;