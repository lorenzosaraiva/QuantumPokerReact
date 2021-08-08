import React from 'react';
import PlayerStatus from './player_status';
import Card from './card'



export default function Info(props) {
   
    let turntag
    let players
    let current
    let dealer
    let card1 = []
    let card2 = []
    let hand1card1 = []
    let hand1card2 = []
    let hand2card1 = []
    let hand2card2 = []
    var player = props.player
    var table = props.table
    
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
            hand1card1 = hand1[0]
            hand1card2 = hand1[1]
            hand2card1 = hand2[0]
            hand2card2 = hand2[1]
        }
       

        players = []
        for (const [, player] of Object.entries(table.all_players)){
            players.push(<PlayerStatus player={player} key = {player.number}/>)
            if (player.id === table.dealer){
                dealer = player.username
            }
            if (player.id === table.current_player){
                current = player.username
            }
        }

        if (player.id === table.current_player && table.current_player !== undefined ){
            turntag = <span className="tag is-primary is-rounded">Your turn!</span>
        }else{
            turntag = ""
        }
    }else{
        turntag = ""
    }

    var ret = null 

    if (player?.diff_ent === 0){
        ret = <div id = "table_div">
        Pot: {props.table?.pot} <br/>
        Dealer: {dealer} <br/> 
        You are player {player?.username} {turntag}<br/>
        Active player is {current} <br/>
        To call: {player?.to_call} <br/>
        ent: {player?.diff_ent}  <br/>
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
    }else{
        ret = <div id = "table_div">
        Pot: {props.table?.pot} <br/>
        Dealer: {dealer} <br/> 
        You are player {player?.username} {turntag}<br/>
        Active player is {current} <br/>
        To call: {player?.to_call} <br/>
        ent: {player?.diff_ent}  <br/>
        {players}
            <div className="columns">
                <div className="column is-half">
                    <div className="box">
                        <div className="box">
                            {hand1card1}
                        </div>
                        <div className="box">
                            {hand1card2}
                        </div>
                    </div>
                </div>
                <div className="column is-half">
                    <div className="box">
                        <div className="box">
                            {hand2card1}
                        </div>
                        <div className="box">
                            {hand2card2}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
   
    //{player?.diff_ent === 0 ? "box is-danger" : "box is-danger"}
    return ret
}