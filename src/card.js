import React from 'react';
export default function Card(props){
    return <img className='card' src={"./cards/"+props.id+".png"} alt={props.id}/>
}