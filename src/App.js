import React from 'react';
import Navbar from './components/header/Navbar';
import Home from './pages/homePage/Home';
import { Switch, Route } from 'react-router-dom';
import SignUp from './pages/authPage/SignUp';
import SignIn from './pages/authPage/SignIn';
import Experience from './pages/experience/Experience';
import Help from './pages/help/Help';
import SearchPage from './pages/searchPage/SearchPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/experiences" component={Experience} />
        <Route path="/help" component={Help} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </>
  );
};

export default App;