import React from 'react';
import { createGlobalStyle } from "styled-components";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


import Nav from './components/Nav.js'
import Main from './components/Main'
import SecondMain from './components/SecondMain'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Boards from './components/Boards.js';
import NewBoard from './components/NewBoard';
import ThirdMain from './components/ThirdMain';
import BoardPage from './components/Board';







function App() {
  return (
    <div>
    <Router>
    <Switch>
        <Route exact path="/">
      <GlobalStyles />
      <Nav />
      <Main />
      <SecondMain />
      <ThirdMain />
        </Route>
        <Route path="/Login" component={Login}>
      <Login />
      </Route>
      <Route path="/SignUp" component={SignUp}>
        <SignUp />
        </Route>
        <Route path="/boards" component={Boards}>
          <Boards />
        </Route>
        <Route path="/newBoard" component={NewBoard}>
          <NewBoard />
          </Route>
          <Route path="/board" component={BoardPage}>
          <BoardPage />
          </Route>
    </Switch>
    </Router>  
    </div>
  );
}

export default App;


const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Palanquin&display=swap');
    font-family: 'Palanquin', sans-serif;
  }
`