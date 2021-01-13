import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { D1 } from "./draft/1";
import { D2 } from "./draft/2";
import { S1 } from "./slate/1";
import { S2 } from "./slate/2";
import { D3 } from "./draft/3";
import { S3 } from "./slate/3";
import { D4 } from "./draft/4";
import { S4 } from "./slate/4";


const draft = [D1, D2, D3, D4];
const slate = [S1, S2, S3, S4];
const steps = [
  'Basic',
  'Basic Text Formatting',
  'Block Formatting',
  'Transient State'
]

export default function App() {
  return (
    <Router>
      <div>
        <table>
          <thead>
            <th>
              <td></td>
              <td>Slate</td>
              <td>Draft</td>
            </th>
          </thead>
          <tbody>
            {steps.map((s, i) => (
              <tr>
                <td>{s}</td>
                <td><Link to={`/D${i + 1}`}>Draft js</Link></td>
                <td><Link to={`/S${i + 1}`}>Slate js</Link></td>
              </tr>
            ))}
          </tbody>
        </table>

        <Switch>
          {draft.map((D, i) => (
            <Route key={`/D${i + 1}`} path={`/D${i + 1}`}>
              <D />
            </Route>
          ))}

          {slate.map((S, i) => (
            <Route key={`/S${i + 1}`} path={`/S${i + 1}`}>
              <S />
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}
