import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BoilerPlateContainer from '../containers/BoilerPlateContainer';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={BoilerPlateContainer} />
            <Route component={() => '404'} />
        </Switch>
    </Router>
);

export default App;
