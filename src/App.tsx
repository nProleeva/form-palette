import React from "react";
import Form from './form';
import Palette from "./palette";

import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter
} from "react-router-dom";

const App:React.FC<{}> = () => {
    return (
        <Router>
        <HashRouter basename="/form-palette" hashType="noslash">
            <div>
                <ul>
                    <li>
                        <Link to="/form">Form</Link>
                    </li>
                    <li>
                        <Link to="/palette">Palette</Link>
                    </li>
                </ul>

                <hr />
                <Switch>
                    <Route path="/form">
                        <Form />
                    </Route>
                    <Route path="/palette">
                        <Palette />
                    </Route>
                </Switch>
            </div>
        </HashRouter>
        </Router>
    );
}

export default App;