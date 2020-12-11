import React from 'react';
import './Card.style.css';

export const Card = props => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="someImage"></img>
            <h2>{props.monster.name}</h2>
            <h3>{props.monster.email}</h3>
            {/* {console.log(props.monster)} */}
        </div>
    )
}