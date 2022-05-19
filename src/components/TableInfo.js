import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import './DataTableDemo.css';

const TableInfo = ({ columns, data, handleTableData, colEdit }) => {

  const [first2, setFirst2] = useState(0);
  const [rows2, setRows2] = useState(10);
  const [dates2, setDates2] = useState(null);



  const onCustomPage2 = (event) => {
    setFirst2(event.first);
    setRows2(event.rows);
  }

  const template2 = {
    layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
    'RowsPerPageDropdown': (options) => {
      const dropdownOptions = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 20, value: 20 }
      ];

      return (
        <React.Fragment>
          <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>Items per page: </span>
          <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />
        </React.Fragment>
      );
    },
    'CurrentPageReport': (options) => {
      return (
        <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
          {options.first} - {options.last} of {options.totalRecords}
        </span>
      )
    }
  };

  const priceBodyTemplate = (rowData) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(rowData.price);
  };

  const cellEditor = (options) => {
    return textEditor(options);
  };

  const onCellEditComplete = (e) => {
    let { rowData, newValue, field, originalEvent: event } = e;
    handleTableData(e)
  };

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
        <DataTable
          value={data}
          editMode="cell"
          className="datatable-editing-demo"
          style={{border:"1px solid grey"}}
          // showGridlines
          responsiveLayout="scroll"
          scrollable scrollHeight="400px"
          paginator paginatorTemplate={template2}
          first={first2}
          rows={rows2}
          onPage={onCustomPage2}
          paginatorClassName="justify-content-end"
        >
          {columns.map(({ field, header }) => {
            return (
              <Column
                key={field}
                field={field}
                header={header}
                style={{ width: "25%" }}
                body={field === "price" && priceBodyTemplate}
                // editor={(options) => cellEditor(options)}
                // onCellEditComplete={onCellEditComplete}
                {...colEdit ? {'editor': (options) => cellEditor(options)} : {}}
                {...colEdit ? { 'onCellEditComplete' : onCellEditComplete} : {}}
                
              />
            );
          })}
        </DataTable>
        <div className="field col-12 md:col-4">
                        <label htmlFor="range">Range</label>
                        <Calendar id="range" value={dates2} onChange={(e) => setDates2(e.value)} selectionMode="range" readOnlyInput />
                    </div>
      </div>
    </div>
  );
};

export default TableInfo;
