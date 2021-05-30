import React from "react";

export default function game() {
    return (<div>
<div id = "table_div">
	Table:<p id = "table_cards"></p> <br/>
	Pot: <b id = "pot"></b> <br/> 
	Dealer: <b id = "dealer"></b> <br/> 
	Active player is <b id = "active"></b> <br/>
	<div id = "players_div"> 
	</div>
	Your hand is <b id = "hand"></b>	<br/>
	To call: <b id = "to_call"></b> <br/>
	<b id = "end"></b> 

</div>

<div>
	<button type="submit" onclick="raise_bet()" name='raisebtn'>Raise</button>
	<label for="bet">Bet Size:</label>
	<input type="number"  id="bet" value="0" min = "0" />
</div>

<br/>
<div>
<button type="submit" onclick="check()" name='checkbtn'>Check</button>
<button type="submit" onclick="call()" name='callbtn'>Call</button>
<button type="submit" onclick="fold()" name='foldbtn'>Fold</button>
</div>

<br/>

<div>
<button type="submit" onclick="quantum_draw1()" name='qd1btn'>Quantum Draw Card 1</button>
<button type="submit" onclick="quantum_draw2()" name='qd2btn'>Quantum Draw Card 2</button>
</div>

<br/>

<div>
<button type="submit" onclick="entangle1()" name='etg1btn'>Entangle Same Card 1</button>
<button type="submit" onclick="entangle2()" name='etg2btn'>Entangle Same Card 2</button>
</div>

<br/>

<div>
<button type="submit" onclick="entangle_diff_1_2()" name='etgd1btn'>Entangle Diff 1 to 2</button>
<button type="submit" onclick="entangle_diff_2_1()" name='etgd2btn'>Entangle Diff 2 to 1</button>

</div>
<br/>

<button type="submit" onclick="restart_hand()" name='restartbtn'>Restart</button>
<button type="submit" onclick="top_up()" name='topupbtn'>Top Up</button>


<br/>


<textarea id="log" name="log" rows="10" cols="50"></textarea>



<script src="main.js"></script>
</div>);
}