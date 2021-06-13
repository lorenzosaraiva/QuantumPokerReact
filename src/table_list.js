import React, { useEffect, useState } from "react";

var url = "http://127.0.0.1:8000/"
var headers = {}

export default function TableList(props) {
  const [table_list, setTableList] = useState([])

  async function main() {

		var table_list = await get_table_list()
		setTableList(table_list)
  }
  
  async function get_table_list() {
    var table_list = await fetch(url + "table_list",  { headers: headers })
    var json = await table_list.json()
    console.log(json)
		return json
  }
  console.log("Table list ")
  console.log(props.table_list)

  useEffect(() => {
		headers = new Headers({
			'Authorization': 'Bearer ' + props.token,
			'Content-Type': 'application/x-www-form-urlencoded'
		})
		//main()
  })
  
	return (<div>
      	<button className="button" type="submit" onClick={main} name='refreshbtn'>Refresh</button>

		
        <table className="table">
  <thead>
    <tr>
      <th><abbr title="Position">Pos</abbr></th>
      <th>{(table_list.length > 0)? table_list[0].flop1 : 0}</th>
      <th><abbr title="Played">Pld</abbr></th>
      <th><abbr title="Won">W</abbr></th>
      <th><abbr title="Drawn">D</abbr></th>

    </tr>
  </thead>
  <tfoot>
    <tr>
      <th><abbr title="Position">Pos</abbr></th>
      <th>Team</th>
      <th><abbr title="Played">Pld</abbr></th>
      <th><abbr title="Won">W</abbr></th>
      <th><abbr title="Drawn">D</abbr></th>
      <th><abbr title="Lost">L</abbr></th>
      <th><abbr title="Goals for">GF</abbr></th>
      <th><abbr title="Goals against">GA</abbr></th>
      <th><abbr title="Goal difference">GD</abbr></th>
      <th><abbr title="Points">Pts</abbr></th>
      <th>Qualification or relegation</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th>1</th>
      <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
      </td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
    </tr>
  </tbody>
</table>



	</div>);
}