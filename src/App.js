import Form from './form'
import Palette from "./providerPalette";

import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router>
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
        </Router>
    );
}

export default App;