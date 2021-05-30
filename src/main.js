import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./login";
import game from "./game";
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

export default function BasicExample() {
  const { token, setToken } = useToken();
  const history = useHistory()
  console.log(history)
  console.log(token)
  if(!token) {
    return <Login setToken={setToken} history={history} />
  }

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
        </ul>

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
            <Game history={history}/>
          </Route>
          <Route path="/profile">
            <Profile history={history}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.


function Game() {
  return game()
}

function Profile() {
  return (<p>Profile</p>)
}
