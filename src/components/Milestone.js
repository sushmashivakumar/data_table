import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Calendar } from 'primereact/calendar';
import TableInfo from './TableInfo'
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from "../features/tableInfo";
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';

const Milestone = ({ tab, reset }) => {
  const [displayBasic2, setDisplayBasic2] = useState(true);
  const [sifrom, setSiFrom] = useState(null);
  const [sito, setSiTo] = useState(null);
  const [pxtfrom, setPXTFrom] = useState(null);
  const [pxtto, setPXTTo] = useState(null);
  const [selectedMilestone1, setSelectedMilestone1] = useState(null);
  const tableInfo = useSelector(state => state.tableInfo);
  const dispatch = useDispatch();
  const onHide = (name) => {
    reset("");
    setDisplayBasic2(false);
  };
  const onMilestoneChange = (e) => {
    setSelectedMilestone1(e.target.value);
}


 const milestone1 = [
        { name: 'PO' },
        { name: 'A1' },
        { name: 'PRQ' },
        { name: 'ES'},
        { name: 'A0' },
        { name: 'B0' }
    ];
    const milestone2 = [
      { name: 'Alpha' },
      { name: 'Beta'},
      { name: 'PV'},
     
  ];
  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="Submit"
          icon="pi pi-check"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };
  const title = tab.charAt(0).toUpperCase() + tab.slice(1);

  const handleTableData = (data) => {
    const newTableInfo = tableInfo.map((table,index) => {
      if(index === data.rowIndex){
        return { ...table, ...data.newRowData }
      }
      return table
    })
    dispatch(loadData(newTableInfo))

  }

  return (
    <Dialog
      header={title}
      visible={displayBasic2}
      style={{ width: "50vw" }}
      footer={renderFooter("displayBasic2")}
      onHide={() => onHide("displayBasic2")}
    >
      <div class="grid">
        <div class="col-3">
          {/* <Button
            label="SI Milestone"
            className="p-button-outlined p-button-info"
          /> */}
          
          {/* <Dropdown className="test" value={selectedMilestone1} options={milestone1} onChange={onMilestoneChange} variant="outlined info"optionLabel="name" placeholder="SI Milestone" /> */}
          <MultiSelect value={selectedMilestone1} options={milestone1} onChange={(e) => setSelectedMilestone1(e.value)} optionLabel="name" placeholder="Select Milestone" maxSelectedLabels={3} />
          
        </div>
        <div class="col-9">
          <Calendar id="icon"value={sifrom} onChange={(e) => setSiFrom(e.value)} style={{ 'marginRight':'2em'}} showIcon />
          <Calendar id="icon"value={sito} onChange={(e) => setSiTo(e.value)} showIcon />
        </div>
      </div>

      {/* <div class="grid">
        <div class="col-3">
          <Button
            label="PXT Milestone"
            className="p-button-outlined p-button-info"
          /> 
          <Dropdown value={selectedMilestone1} options={milestone2} onChange={onMilestoneChange} optionLabel="name" placeholder="PXT Milestone" />
        </div>
        <div class="col-9">
          <Calendar value={pxtfrom} onChange={(e) => setPXTFrom(e.value)} style={{ 'marginRight':'2em'}} />
          <Calendar value={pxtto} onChange={(e) => setPXTTo(e.value)} />
        </div>
      </div> */}
      <br/>

      {/* <TableInfo columns={columns} data={tableInfo} handleTableData={handleTableData} />       */}
    </Dialog>
  );
};

export default Milestone;
