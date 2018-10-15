import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Movies from './components/movies/Movies';
import Series from './components/series/Series';

import './styles/main.scss'; //SASS MAIN FILE
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Movies} />
              <Route exact path="/movies" component={Movies} />
              <Route exact path="/series" component={Series} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
