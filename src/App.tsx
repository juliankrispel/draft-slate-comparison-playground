import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SlateEditor from "./slate";
import DraftEditor from "./draft";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/slate">slate-js editor</Link>
            </li>
            <li>
              <Link to="/draft">draft-js editor</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/slate">
            <SlateEditor />
          </Route>
          <Route path="/draft">
            <DraftEditor/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
