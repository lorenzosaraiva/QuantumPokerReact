import React, { useEffect, useState } from "react";

import Info from "./info"
import Table from "./table"



export default function Game(props) {
	const [log, setLog] = useState("")
	const [current_player, setCurrentPlayer] = useState()
	const [table, setTable] = useState()
	//const [raise_amount, setRaise] = useState()

	//console.log("Game")

	//var url = "https://quantum-poker.herokuapp.com/"
	var url = "http://127.0.0.1:8000/"
	var headers = {}
	
	async function find_table() {
		var table = await fetch(url + "find_table/", { headers: headers })
		var json = await table.json()
		return json
	}

	async function get_player() {
		var player = await fetch(url + "player/", { headers: headers })
		var json = await player.json()
		return json
	}

	async function get_table() {
		var table = await fetch(url + "table")
		var json = await table.json()
		return json
	}
	
	async function main() {

		var player = await get_player()
		setCurrentPlayer(player)

		var table = await get_table()
		setTable(table)

	}

	async function restart_hand() {
		var answer = await (await fetch(url + "restart_hand/")).text()
		setLog(log + answer + "\n")
		await main()
	}

	async function check() {
		var answer = await (await fetch(url + "check/", { headers: headers })).text()
		setLog(log + answer + "\n");
		await main()
	}

	async function call() {
		var answer = await (await fetch(url + "call/", { headers: headers })).text()
		setLog(log + answer + "\n");
		await main()
	}

	async function raise_bet() {
		//var bet = document.getElementById("bet").value
		var answer = await (await fetch(url + "raise_bet/", {headers: headers })).text()
		setLog(log + answer + "\n");
		await main()
	}

	async function fold() {
		var answer = await (await fetch(url + "fold/", { headers: headers })).text()
		setLog(log + answer + "\n");
		await main()
	}

	async function quantum_draw1() {
		var answer = await (await fetch(url + "quantum_draw1/", { headers: headers })).text()
		setLog(log + answer + "\n")
		await main()
	}

	async function quantum_draw2() {
		var answer = await (await fetch(url + "quantum_draw2/", { headers: headers })).text()
		setLog(log + answer + "\n")
		await main()
	}

	async function entangle1() {
		var answer = await (await fetch(url + "entangle1/", { headers: headers })).text()
		setLog(log + answer + "\n")
		await main()
	}

	async function entangle2() {
		var answer = await (await fetch(url + "entangle2/", { headers: headers })).text()
		setLog(log + answer + "\n");
		await main()
	}

	async function entangle_diff_1_2() {
		var answer = await (await fetch(url + "entangle_diff_1_2/", { headers: headers })).text()
		setLog(log + answer + "\n");
		await main()
	}

	async function entangle_diff_2_1() {
		var answer = await (await fetch(url + "entangle_diff_2_1/", { headers: headers })).text()
		setLog(log + answer + "\n");
		await main()
	}

	async function top_up() {
		var answer = await (await fetch(url + "top_up/", { headers: headers })).text()
		setLog(log + answer + "\n");
		await main()
	}

	useEffect(() => {
		headers = new Headers({
			'Authorization': 'Bearer ' + props.token,
			'Content-Type': 'application/x-www-form-urlencoded'
		})
		//main()
		//setInterval(main, 1000)
	})

	return (<div>
		
		<div className="columns">
			<div className="column">
				<Table table={table}/>
				<div className="columns">
			<div className="column">
				<textarea readOnly id="log" name="log" rows="10" cols="50" value={log} />
			</div>
			<div className="column">
				<Info player={current_player} table={table}/>
			</div>
			<div className="column">
				<div className = "block">
					<div>
						<button className="button is-danger" type="submit" onClick={raise_bet} name='raisebtn'>Raise</button>
						<input className="input" type="number" defaultValue = {0} ></input>
					</div>
					<br />
					<div>
						<button className="button" type="submit" onClick={check} name='checkbtn'>Check</button>
						<button className="button" type="submit" onClick={call} name='callbtn'>Call</button>
						<button className="button" type="submit" onClick={fold} name='foldbtn'>Fold</button>
					</div>
					<br />
					<div>
						<button className="button" type="submit" onClick={quantum_draw1} name='qd1btn'>Quantum Draw Card 1</button>
						<button className="button" type="submit" onClick={quantum_draw2} name='qd2btn'>Quantum Draw Card 2</button>
					</div>
					<br />
					<div>
						<button className="button" type="submit" onClick={entangle1} name='etg1btn'>Entangle Same Card 1</button>
						<button className="button" type="submit" onClick={entangle2} name='etg2btn'>Entangle Same Card 2</button>
					</div>
					<br />
					<div>
						<button className="button" type="submit" onClick={entangle_diff_1_2} name='etgd1btn'>Entangle Diff 1 to 2</button>
						<button className="button" type="submit" onClick={entangle_diff_2_1} name='etgd2btn'>Entangle Diff 2 to 1</button>
					</div>
					<br />
					<div>
						<button className="button" type="submit" onClick={restart_hand} name='restartbtn'>Restart</button>
						<button className="button" type="submit" onClick={top_up} name='topupbtn'>Top Up</button>
						<button className="button" type="submit" onClick={find_table} name='fndtblbtn'>EnterTable</button>

					</div>	
				</div>
				</div>
				</div>
			</div>
		</div>







	</div>);
}