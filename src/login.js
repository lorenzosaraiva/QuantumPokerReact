import React from "react";

export default function login() {
    return (
<div class="columns is-centered">
	<div class="column is-half">
    	<h1 class="title">QUANTUM POKER</h1>
		<form class="box">
		<div class="field">
			<label class="label">Email</label>
			<div class="control">
			    <input class="input" type="email" placeholder="e.g. alex@example.com"/>
			</div>
		</div>

		<div class="field">
			<label class="label">Password</label>
			<div class="control">
			<input class="input" type="password" placeholder="********"/>
			</div>
		</div>

		<button class="button is-primary">Sign in</button>
		</form>
  	</div>
</div>

);
}