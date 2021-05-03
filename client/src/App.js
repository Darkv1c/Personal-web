import React from 'react';
import {LoadingPage} from './Pages';
import {Route, Switch, withRouter} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './transitions.css';
import Home from './Pages/Home/Home';

const App = () => {

    const AnimatedSwitch = withRouter(({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="slide" 
          onExiting={()=> window.scrollTo(0,0)} timeout={1000}>
            <Switch location={location}>
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