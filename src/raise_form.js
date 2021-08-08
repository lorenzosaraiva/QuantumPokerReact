import React from "react";


export default function RaiseForm(props){

    return (
            <div>
				<button className="button is-danger" type="submit" onClick={raise_bet} name='raisebtn'>Raise</button>
				<input className="input" type="number" defaultValue = {0} ></input>
			</div>
    )
}