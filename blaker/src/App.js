import React from 'react';
import { Button } from 'react-bulma-components';
import './App.css';

function App() {
  var name = 'Start Blakeing Now';
  doSomething = () => {
    name ='The Blakening has begun'
  }
  return (
    <div className="App">
      <Button color='info' onClick={this.doSomething()}>
        {name}
      </Button>
    </div>
  );
}

export default App;
