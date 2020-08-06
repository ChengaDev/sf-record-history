/*global chrome*/
import React, { useState, useEffect } from 'react';
import logo from './logofull.png';
import spinner from './spinner_S.svg';
import './styles/App.css';
import BackupsGrid from './Components/BackupsGrid';
import FieldHistoryGrid from './Components/FieldHistoryGrid';
import actions from './actions';

function App() {
    const [currentUrl, setCurrentUrl] = useState('');
    const [backups, setData] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [currentField, setCurrentField] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [dropdownFields, setDropdownFields] = useState([]);

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
        if (!currentUrl || url != currentUrl) {
            setCurrentUrl(url);
        }
    });

    useEffect(() => {
        try {
            if (currentUrl) {
            const fetchData = async() => {
                    setIsFetching(true);
                    // const currentUrl = 'https://cs27.lightning.force.com/lightning/r/Contact/0032200000G5ZZtAAN/view';
                    console.log(currentUrl);
                    const urlParts = currentUrl.split('/');
                    const sobjectName = urlParts[5];
                    const recordId = urlParts[6];
                    const recordHistory = await actions.fetchRecordHistory(sobjectName, recordId, 3);
                    setData(recordHistory);
                    setIsFetching(false);
                };
                fetchData();
            }  
        }
        catch (ex) {
            setHasError(true);
        }
    },[currentUrl]);

    const onRightArrowClick = () => {
        if (backups && currentPage === backups.length - 1) {
            return;
        } else {
            setCurrentPage(currentPage + 1);
        }
    };
    
    const onLeftArrowClick = () => {
        if (currentPage === 0) {
            return;
        } else {
            setCurrentPage(currentPage - 1);
        }
    };

    const onFieldSelection = (field) => {
        setCurrentField(field);
    };

    const onBackClick = () => {
        setCurrentField(null);
        setCurrentPage(0);
    };

    const currentBackup = backups ? backups[currentPage] : null;

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                {backups && !currentField && <div id='title'>{currentBackup.backup_date}</div>}
            </header>
            
            <div id='container'>
                {isFetching && <div id="loading"><img src={spinner} /></div>}
                {hasError && <div>An error has occured</div>}
                {!isFetching && backups && !currentField &&
                    <>
                        <div onClick={onLeftArrowClick} className='arrow'>
                            <span className='material-icons'>keyboard_arrow_left</span>
                        </div>
                        <BackupsGrid allBackups={backups} onFieldSelection={onFieldSelection} backup={currentBackup} />
                        <div onClick={onRightArrowClick} className='arrow'>
                            <span className='material-icons'>keyboard_arrow_right</span>
                        </div>
                    </>
                }                

                {currentField && 
                    <div id="selectedRecord">
                        <div id="fieldNameTitle">Changes for <span id="fieldName">{currentField.field_name}</span>{' '}field</div>
                        <FieldHistoryGrid fieldName={currentField.field_name} backups={backups} />
                        <div>
                            {/* <button id="btnCompare" type="button" className="button">Compare</button> */}
                            <button className="button" id="btnBack" onClick={onBackClick} type="button">Back</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default App;
