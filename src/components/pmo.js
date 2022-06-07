import React, { useState, useRef } from 'react';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from "primereact/calendar";

function PMO({ columns, data, colEdit, handleTableData }) {

   
    const [selectedMode, setSelectedMode] = useState(null);
    const [date1, setDate1] = useState(null);
    const [milestoneEdit,setMilestoneEdit] = useState(false)
    const [milestoneDate, setMilestoneDate] = useState({})
    const [date3, setDate3] = useState(null);

    const modes = [
        { name: 'Low Modify' },
        { name: 'Medium Modify' },
        { name: 'Heavy Modify' },

    ];
    const cellEditor = (options) => {
       
        // return textEditor(options);
        return <Calendar id="icon" value={date3} onChange={(e) => setDate3(e.value)} showIcon />
        
      };
    
      const onCellEditComplete = (e) => {
        let { rowData, newValue, field, originalEvent: event } = e;
        handleTableData(e)
      };

    const onModeChange = (e) => {
        setSelectedMode(e.value);
    }

    const textEditor = (options) => {
        console.log(options);
        if (options.field === "milestone") return options.value;
        
        return (
          <InputText
            type="text"
            value={options.value}
            onChange={(e) => { console.log(options); options.editorCallback(e.target.value) }}
          />
        );
      };
    
      const dateTemplate = (rowData) => {
        return (
          <div className="field col-12 md:col-12">
               {/* <Calendar id="icon" value={date3} onChange={(e) => setDate3(e.value)} showIcon /> */}
            <Calendar
              id="icon"
              // className="p-button-rounded p-button-outlined mb-2"
              value={milestoneDate[rowData.milestone] || null}
              onChange={(e) => { 
                setMilestoneDate({...milestoneDate, [rowData.milestone]: e.value})
              }
              }
              showIcon
              {...!milestoneEdit ? { disabled : true} : {} }
            />
          </div>
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
                                // body={dateTemplate}
                                style={{ width: "30%" }}
                                {...colEdit ? { 'editor': (options) => cellEditor(options) } : {}}
                                {...colEdit ? { 'onCellEditComplete': onCellEditComplete } : {}}

                            />
                            // <Calendar id="basic" value={date1} onChange={(e) => setDate1(e.value)} />
                        );
                    })}
                </DataTable>
            </div>
        </div>
    );
}

export default PMO;
