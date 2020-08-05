import React from 'react';

const FieldHistoryGrid = ({fieldName, backups}) => {
    const valueToDisplay = backups.map(backup => {
        const relevantField = backup.changed_fields.filter(change => change.field_name === fieldName)[0];
        if (relevantField && relevantField.new_value) {
            return { backupDate: backup.backup_date, value: relevantField.new_value };
        }        
    });

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
                        <div className='Rtable-cell'>{change.value}</div>
                    </>
                );
            })}
        </div>
    );
};

export default FieldHistoryGrid;
