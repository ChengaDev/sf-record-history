/*global chrome*/
import React, { useState } from 'react';
import logo from './logofull.png';
import './styles/App.css';
import Grid from './Components/Grid';

function App() {
    const [currentUrl, setCurrentUrl] = useState('');
    const backupId = 123123;

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
        setCurrentUrl(url);
    });

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <div>Backup {backupId} records changes</div>
                {/* <div>{currentUrl}</div>                 */}
            </header>
            <Grid />
        </div>
    );
}

export default App;
