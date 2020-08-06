import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactTooltip from "react-tooltip";

const FieldHistoryGrid = ({fieldName, backups}) => {
    let firstValue = null;
    let valueToDisplay = backups.map((backup, index) => {
        const relevantField = backup.changed_fields.filter(change => change.field_name === fieldName)[0];
        if (index === 0) {
            firstValue = { backupDate: '-', value: relevantField ? relevantField.old_value : 'Empty' };
        }
        if (relevantField && relevantField.new_value) {
            return { backupDate: backup.backup_date, value: relevantField.new_value };
        }
    });
    valueToDisplay.unshift(firstValue);

    return (
        <div className='Rtable Rtable--2cols'>
            <div className='Rtable-cell header'>
                <h3>Backup Date</h3>
            </div>
            <div className='Rtable-cell header'>
                <h3>Value</h3>
            </div>

            {valueToDisplay.filter(field => field).map((change, index) => {
                return (
                    <>
                        <div className='Rtable-cell field'>{change.backupDate}</div>
                        <div className='Rtable-cell'>
                            <CopyToClipboard text={change.value}>
                                <span data-tip="Click to copy">{change.value}</span>
                            </CopyToClipboard>
                            <ReactTooltip place="top" type="light" effect="solid"/>
                        </div>
                    </>
                );
            })}
        </div>
    );
};

export default FieldHistoryGrid;
