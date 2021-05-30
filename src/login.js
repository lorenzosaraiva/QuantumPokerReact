import React, { useState, useRef } from 'react';


	

export default function Login(props) {
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();
	const form = useRef(null)
	const handleSubmit = async e => {
		e.preventDefault();
		const token = await fetch('http://localhost:8000/token', {
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
<div class="columns is-centered">
	<div class="column is-half">
    	<h1 class="title">QUANTUM POKER</h1>
		<form class="box" ref={form} onSubmit={handleSubmit}>
		<input type="hidden" name="grant_type" value="password	" />
		<input type="hidden" name="scope" value="" />
		<input type="hidden" name="client_id" value="" />
		<input type="hidden" name="client_secret" value="" />

		<div class="field">
			<label class="label">Email</label>
			<div class="control">
			    <input class="input" placeholder="e.g. username" name="username" defaultValue={username} onChange={e => setUserName(e.target.value)}/>
			</div>
		</div>

		<div class="field">
			<label class="label">Password</label>
			<div class="control">
			<input class="input" type="password" placeholder="********" name="password" defaultValue={password} onChange={e => setPassword(e.target.value)}/>
			</div>
		</div>

		<button class="button is-primary">Sign in</button>
		</form>
  	</div>
</div>

);
}

