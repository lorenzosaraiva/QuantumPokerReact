import React from "react";


export default function PlayerStatus(props){
    return (
        <div className="box">
           Player {props.player.number} has {props.player.stack} chips.
        </div>
    )
}