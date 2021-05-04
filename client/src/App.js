import React from 'react';
import {LoadingPage, AboutMe, Home, Projects, Tutorials} from './Pages';
import {Route, Switch, withRouter} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './transitions.css';

const App = () => {

    const AnimatedSwitch = withRouter(({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="slide" 
          onExiting={()=> window.scrollTo(0,0)} timeout={1000}>
            <Switch location={location}>
              <Route exact path="/"><LoadingPage/></Route>
              <Route path="/home"><Home/></Route>             
              <Route path="/Projects"><Projects/></Route>
              <Route path="/Tutorials"><Tutorials/></Route>               
              <Route path="/AboutMe"><AboutMe/></Route> 
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      ));
    return <div className="App">
       <AnimatedSwitch/>
    </div>
}

export default App;