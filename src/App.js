/*global chrome*/
import React, {useState} from 'react';
import logo from './logo.svg';
import './Styles/App.css';

function App() {
  const [currentUrl, setCurrentUrl] = useState('');

  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      let url = tabs[0].url;
      // use `url` here inside the callback because it's asynchronous!
      setCurrentUrl(url);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          OwnBackup extension to view SalesForce record
        </div>
        <div>
          {currentUrl}
        </div>
      </header>
    </div>
  );
}

export default App;
