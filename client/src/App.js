import React from 'react';
import {LoadingPage} from './Pages';
import {Route, Switch, withRouter} from 'react-router-dom'
import {Navbar} from './components';
import Home from './Pages/Home/Home';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './transitions.css';

const App = () => {

    const AnimatedSwitch = withRouter(({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="slide" timeout={1000}>
            <Switch location={location}>
                {location.pathname!=="/" && <Navbar/>}
                <Route path="/home"><Home/></Route>
                <Route path="/"><LoadingPage/></Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      ));
    return <div className="App">
       <AnimatedSwitch/>
    </div>
}

export default App;