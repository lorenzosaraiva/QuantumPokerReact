import React from 'react';
import PlayerStatus from './player_status';
import Card from './card'



export default function Info(props) {
   
    let turntag
    let players
    let card1 = []
    let card2 = []
    var player = props.player
    var table = props.table
    
    console.log(props.table?.current_player)
    if (player && table){
        if (player.diff_ent === 0){
            player.card1_active.forEach(card => {
                card1.push(<Card id={card.name} key={card1.length}/>)
            });
    
            player.card2_active.forEach(card => {
                card2.push(<Card id={card.name} key={card2.length}/>)
            });
        }else{
            let hand1 = []
            let hand2 = []
            let temp_card = []
            player.card1_active.forEach(hand => {
                hand.forEach(card => {
                    temp_card.push(<Card id={card.name}/>)
                });
                hand1.push(temp_card)
                temp_card = []
            });

            player.card2_active.forEach(hand => {
                hand.forEach(card => {
                    temp_card.push(<Card id={card.name}/>)
                });
                hand2.push(temp_card)
                temp_card = []
            });
            card1 = hand1
            card2 = hand2
        }
       

        players = []
        for (const [username, player] of Object.entries(table.all_players)){
            console.log(username)
            players.push(<PlayerStatus player={{number:player.number, stack: player.stack}} key = {player.number}/>)

        }

        if (player.number === table.current_player && table.current_player !== undefined ){
            turntag = <span className="tag is-primary is-rounded">Your turn!</span>
        }else{
            turntag = ""
        }
    }else{
        turntag = ""
    }
   

    return <div id = "table_div">
	Pot: {props.table?.pot} <br/>
	Dealer: {props.table?.dealer} <br/> 
    You are player {player?.id} {turntag}<br/>
	Active player is {table?.current_player} <br/>
    To call: {player?.to_call} <br/>
    {players}
        <div className="columns">
            <div className="column is-half">
                <div className="box">
                    {card1}
                </div>
            </div>
            <div className="column is-half">
                <div className="box">
                    {card2}
                </div>
            </div>
        </div>
    </div>
}