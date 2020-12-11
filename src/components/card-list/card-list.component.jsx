import React from 'react';
import './card-list.style.css';
import { Card } from '../card/Card';

export const CardList = (props) => {
    // console.log(props.monsters);

    return (
        <div className="class-list">
            {
                props.monsters.map(monster => {
                    return <Card monster={monster} key={monster.id} />
                })
            }
        </div>
    )
}