import React, { useEffect, useState } from 'react';
import '../styles/Grid.css';

const Grid = ({allBackups, backup, onFieldSelection }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredFields, setFilteredFields] = useState([]);
    const [dropDownFields, setAllDropDownFields] = useState([]);

    useEffect(() => {
        if (searchTerm.length === 0) {
            setFilteredFields(backup.changed_fields);
        } else {
            setFilteredFields(backup.changed_fields.filter(field => field.field_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1));
        }
    }, [searchTerm, backup]);

    useEffect(() => {
        if (searchTerm && filteredFields) {
            setAllDropDownFields(filteredFields);
        } else if (!searchTerm) {
            const availableFields = [];
            const backups = allBackups.map(backup => backup.changed_fields);
            backups.forEach(backupFields => {
                backupFields.forEach(field => {
                    if (!availableFields.find(newField => newField.field_name === field.field_name)) {
                        availableFields.push(field);
                    }
                });
            });
            setAllDropDownFields(availableFields);
        }
    }, [searchTerm, filteredFields]);

    useEffect(() => {
        setFilteredFields(backup.changed_fields);
    }, []);

    if (!backup) {
        return <div>No records to show</div>;
    }
    
    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const onFieldCellClicked = (field) => {
        onFieldSelection(field);
    };

    const onFieldSelected = (field) => {
        onFieldSelection(JSON.parse(field));
    };

    const searchHasNoResults = searchTerm.length > 0 && filteredFields.length === 0;

    return (
        <div>
            <div id="filters">
                <div id="txtSearch">
                    <input placeholder="Type a field..." type="text" value={searchTerm} onChange={handleSearchTermChange} />
                </div>
                <div>
                    <select onChange={(event) => onFieldSelected(event.target.value)} id="fieldDD">
                        <option>Pick a field</option>
                        {dropDownFields.map(field => {
                            return <option value={JSON.stringify(field)}>{field.field_name}</option>
                        })}
                    </select>
                </div>
            </div>

            <div className='backupsGrid Rtable Rtable--3cols'>
                <div className='Rtable-cell header'>
                    <h3>Field</h3>
                </div>
                <div className='Rtable-cell header'>
                    <h3>Old value</h3>
                </div>
                <div className='Rtable-cell header'>
                    <h3>New value</h3>
                </div>

                {filteredFields.map((field, index) => {
                    return (
                        <>
                            <div onClick={() => onFieldCellClicked(field)} className='Rtable-cell field'>{field.field_name}</div>
                            <div className='Rtable-cell'>{field.old_value}</div>
                            <div className='Rtable-cell'>{field.new_value}</div>
                        </>
                    );
                })}

                {searchHasNoResults && <div id="noResults">Search has no results</div>}
            </div>
        </div>
    );
};

export default Grid;
