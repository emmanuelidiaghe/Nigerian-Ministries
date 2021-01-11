import React from 'react';
import Ministry from '../components/Ministry.js';
import '../containers/App.css';

class App extends React.Component{
  constructor() {
      super();
  }

  render() {
      return(
        <div>
          <header>
            <h1>Ministries and Federal Parastatals</h1>
          </header>
          <Ministry />
      </div>
      )
  }
}

export default App;