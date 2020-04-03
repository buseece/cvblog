import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import HomePage from './components/HomePage'
import BlogHome from './components/BlogHome'
import BlogPost from './components/BlogPost'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/blog' component={BlogHome} />
          <Route path='/post' component={BlogPost} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
