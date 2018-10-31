import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Esteban</h1>
      <h2>Start editing to see some react magic happen!</h2>
      <h3>We are using Github for source control</h3>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
