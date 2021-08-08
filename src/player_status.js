import React from "react";


export default function PlayerStatus(props){
    return (
        <div className="box">
           {props.player.username} has {props.player.stack} chips.
        </div>
    )
}