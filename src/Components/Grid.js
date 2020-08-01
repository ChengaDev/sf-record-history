import React from 'react';
import '../styles/Grid.css';

const Grid = () => {
    return (
        <div className='Rtable Rtable--3cols'>
            <div className='Rtable-cell header'>
                <h3>Field</h3>
            </div>
            <div className='Rtable-cell header'>
                <h3>Old value</h3>
            </div>
            <div className='Rtable-cell header'>
                <h3>New value</h3>
            </div>

            <div className='Rtable-cell'>Has a sword</div>
            <div className='Rtable-cell'>No direwolf</div>
            <div className='Rtable-cell'>Lord of Winterfell</div>

            <div className='Rtable-cell'>Has a sword</div>
            <div className='Rtable-cell'>Ghost</div>
            <div className='Rtable-cell'>Knows nothing</div>

            <div className='Rtable-cell'>Has a sword</div>
            <div className='Rtable-cell'>Nymeria</div>
            <div className='Rtable-cell'>No one</div>
        </div>
    );
};

export default Grid;
