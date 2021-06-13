import React from 'react';

import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./login";
import Game from "./game";
import TableList from "./table_list";
import Docs from "./docs"
import { useHistory } from 'react-router'



// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

import useToken from './useToken';
import { useLocation } from 'react-router-dom'

export default function QuantumPoker() {
  const { token, setToken } = useToken();
  const history = useHistory()
  const location = useLocation();

  //console.log(history)
  //console.log(token)

  if(!token) {
    return <Login setToken={setToken} history={history} />
  }

  const current = location.pathname

  return (
    
      <div>
        {current}
        <div className="tabs is-centered">  
          <ul>
            <li className={current === "/profile" ? "is-active" : ""}><Link to="/profile">Profile</Link>        </li>
            <li className={current === "/game" ? "is-active" : ""}><Link to="/game">Game</Link>       </li>
            <li className={current === "/table_list" ? "is-active" : ""}><Link to="/table_list">Tables</Link></li>
            <li className={current === "/docs" ? "is-active" : ""}><Link to="/docs">Rules</Link></li>
            </ul>
        </div>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
           <div>Quantum poker</div>
          </Route>
          <Route path="/game">
            <Game history={history} token={token}/>
          </Route>
          <Route path="/profile">
            <Profile history={history}/>
          </Route>
          <Route path="/table_list">
            <TableList history={history} token={token}/>
          </Route>
          <Route path="/docs">
            <Docs history={history} token={token}/>
          </Route>
        </Switch>
      </div>
  );
}

// You can think of these components as "pages"
// in your app.



function Profile() {
  return (<p>Profile</p>)
}
