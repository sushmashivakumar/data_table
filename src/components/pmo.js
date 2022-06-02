import React, { useState, useRef } from 'react';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

function PMO({ columns, data, colEdit, handleTableData }) {

    const [first2, setFirst2] = useState(0);
    const [rows2, setRows2] = useState(10);
    const [selectedMode, setSelectedMode] = useState(null);
    const [dates2, setDates2] = useState(null);

    const modes = [
        { name: 'Low Modify' },
        { name: 'Medium Modify' },
        { name: 'Heavy Modify' },

    ];
    const cellEditor = (options) => {
        return textEditor(options);
      };
    
      const onCellEditComplete = (e) => {
        let { rowData, newValue, field, originalEvent: event } = e;
        handleTableData(e)
      };

    const onModeChange = (e) => {
        setSelectedMode(e.value);
    }

    const textEditor = (options) => {
        return (
          <InputText
            type="text"
            value={options.value}
            onChange={(e) => { console.log(options); options.editorCallback(e.target.value) }}
          />
        );
      };
    

    return (
        <div>
            <div className="card">
                <h5>Modes</h5>
                <Dropdown value={selectedMode} options={modes} onChange={onModeChange} optionLabel="name" placeholder="Select a Mode" />
            </div>
            <div className="card">
                <DataTable
                    value={data}
                    //   editMode="cell"
                    className="datatable-editing-demo"
                    style={{ border: "1px solid grey" }}
                    // showGridlines
                    responsiveLayout="scroll"
                    scrollable scrollHeight="400px"


                >
                    {columns.map(({ field, header }) => {
                        return (
                            <Column
                                key={field}
                                field={field}
                                header={header}
                                style={{ width: "25%" }}
                                {...colEdit ? { 'editor': (options) => cellEditor(options) } : {}}
                                {...colEdit ? { 'onCellEditComplete': onCellEditComplete } : {}}

                            />
                        );
                    })}
                </DataTable>
            </div>
        </div>
    );
}

export default PMO;