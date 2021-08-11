import React, { useState, useRef } from 'react';


var url = "https://quantum-poker.herokuapp.com/token"
//var url = "http://localhost:8000/token"
export default function Login(props) {
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();
	const form = useRef(null)
	const handleSubmit = async e => {
		e.preventDefault();
		const token = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams	({"username":username, "password":password})
			})
			.then(data => data.json())
		props.setToken(token.access_token);
		props.history.go(0)
	}

    return (
<div className="columns is-centered">
	<div className="column is-half">
    	<h1 className="title">QUANTUM POKER</h1>
		<form className="box" ref={form} onSubmit={handleSubmit}>
		<input type="hidden" name="grant_type" value="password	" />
		<input type="hidden" name="scope" value="" />
		<input type="hidden" name="client_id" value="" />
		<input type="hidden" name="client_secret" value="" />

		<div className="field">
			<label className="label">Email</label>
			<div className="control">
			    <input className="input" placeholder="e.g. username" name="username" defaultValue={username} onChange={e => setUserName(e.target.value)}/>
			</div>
		</div>

		<div className="field">
			<label className="label">Password</label>
			<div className="control">
			<input className="input" type="password" placeholder="********" name="password" defaultValue={password} onChange={e => setPassword(e.target.value)}/>
			</div>
		</div>

		<button className="button is-primary">Sign in</button>
		</form>
  	</div>
</div>

);
}

