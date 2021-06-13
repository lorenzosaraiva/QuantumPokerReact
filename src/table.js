import React from 'react';
import Card from './card'



export default function Table(props) {
    var table = props.table
    let table_ui = []
    if (table){
        table.cards.forEach(card => {
            table_ui.push(<Card id={card.name} key={table_ui.length}/>)
        });

    
   

    return <div id = "table">
        {table_ui}
    </div>
    }
    return <div>Table not loaded</div>
}