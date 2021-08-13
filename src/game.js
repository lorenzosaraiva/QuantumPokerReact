import React, { useEffect, useState } from "react";

import Info from "./info"
import Table from "./table"



export default function Game(props) {
	const [log, setLog] = useState("")
	const [full_log, setFullLog] = useState("")
	const [current_player, setCurrentPlayer] = useState()
	const [table, setTable] = useState()
	const [raise_amount, setRaise] = useState(0)

	useEffect(() => {
		setInterval(main, 2000)
	}, [])

	var url = "https://quantum-poker.herokuapp.com/"
	//var url = "http://127.0.0.1:8000/"
	var headers = new Headers({
		'Authorization': 'Bearer ' + props.token,
		'Content-Type': 'application/x-www-form-urlencoded'
	})
	
	async function fetch_json(endpoint){
		var obj = await fetch(url + endpoint, { headers: headers })
		var json = await obj.json()
		return json
	}
	async function fetch_text(endpoint){
		var obj = await fetch(url + endpoint, { headers: headers })
		var json = await obj.text()
		return json
	}

	async function find_table() {
		var table = await fetch_json("find_table")
		setTable(table)
		return table
	}

	
	async function main() {

		var player = await fetch_json("player")
		setCurrentPlayer(player)

		var table = await fetch_json("table")
		setTable(table)

		if (table !== null){
			setFullLog(table.log)
		}
	}

	async function action(endpoint){
		var answer = await fetch_text(endpoint)
		setLog(log + answer + "\n")
		return await main()
	}
	async function restart_hand() {
		return await action("restart_hand/")
	}

	async function check() {
		return await action("check/")
	}

	async function call() {
		return await action("call/")
	}

	async function raise_bet(value) {
		console.log(raise_amount)
		return await action("raise_bet?amount=" + raise_amount)
	}

	async function fold() {
		return await action("fold/")
	}

	async function quantum_draw1() {
		return await action("quantum_draw1/")
	}

	async function quantum_draw2() {
		return await action("quantum_draw2/")
	}

	async function entangle1() {
		return await action("entangle1/")
	}

	async function entangle2() {
		return await action("entangle2/")
	}

	async function entangle_diff_1_2() {
		return await action("entangle_diff_1_2/")
	}

	async function entangle_diff_2_1() {
		return await action("entangle_diff_2_1/")
	}

	async function top_up() {
		return await action("top_up/")
	}
		
	if (table === undefined){
		return (<div>
					<button className="button" type="submit" onClick={find_table} name='fndtblbtn'>EnterTable</button>
				</div>)
	}
	return (<div>
		<div className="columns">
			<div className="column">
				<Table table={table}/>
			<div className="columns">
				<div className="column">
					<textarea readOnly id="log" name="log" rows="10" cols="50" value={log} />
					<textarea readOnly id="fulllog" name="fulllog" rows="10" cols="50" value={full_log} />

				</div>
				<div className="column">
					<Info player={current_player} table={table}/>
				</div>
				<div className="column">
					<div className = "block">		
						<div>
							<button className="button is-danger" type="submit" onClick={raise_bet} name='raisebtn'>Raise</button>
							<input className="input" type="number" value = {raise_amount} onChange = {(e)=>setRaise(e.target.value)} ></input>
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

						</div>	
					</div>
					</div>
				</div>
			</div>
		</div>







	</div>);
}