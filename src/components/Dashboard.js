import React, { useState, useRef, useEffect } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Menubar } from "primereact/menubar";
import TableInfo from "./TableInfo";
import Milestone from "./Milestone";
import  DataTablePaginator from "./DataTablePaginator";
import Mode from "./Mode";
import { useSelector, useDispatch } from 'react-redux';
import {  useNavigate } from "react-router-dom";
import { Data } from '../data'
import { loadData } from '../features/tableInfo'


const Dashboard = () => {
  const toast = useRef(null);
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(3);
  
  const userStore = useSelector(state => state.userInfo);
  const tableInfo = useSelector(state => state.tableInfo);
  const dispatch = useDispatch();

  const UserInfo = () => {
    return <div> Welcome, Sushma</div>;
  };

  const columns = [
    { field: "features", header: "Features" },
    { field: "feature_owner", header: "Feature Owner" },
    { field: "function", header: "Function" },
    { field: "function_owner", header: "Function Owner" },
    { field: "domain", header: "Domain" },
    { field: "status", header: "Feature ON/OFF" },
    { field: "q1", header: "Q1" },
    { field: "q2", header: "Q2" },
    { field: "q3", header: "Q3" },
    { field: "q4", header: "Q4" },
    { field:"", header:"Total till PRQ"},
    { field: "estimation_type", header: "Estimation Type" }


  ];

  const CustomComponent = () => {
    if (activeIndex === "milestone")
      return <Milestone tab={activeIndex} reset={setActiveIndex} />;
    if (activeIndex === "mode")
      return <Mode tab={activeIndex} reset={setActiveIndex} />;
  };

  const handleTableData = (data) => {
    const newTableInfo = tableInfo.map((table,index) => {
      if(index === data.rowIndex){
        return { ...table, ...data.newRowData }
      }
      return table
    })
    dispatch(loadData(newTableInfo))

  }

  useEffect(() => {
    if(!userStore.hasOwnProperty('useremail')){
      navigate('/');
    }
    dispatch(loadData(Data))
  },[userStore])

  return (
    <div className="datatable-editing-demo">
      <Toast ref={toast} />
      <Menubar end={<UserInfo />} />

      <div className="card">
        <div className="pt-2">
        <Button
            onClick={() => setActiveIndex("mode")}
            className="p-button-text"
            label="Mode"
          />
          <Button
            onClick={() => setActiveIndex("milestone")}
            className="p-button-text"
            label="Milestone"
          />
         
          <Button
            label="Edit"
            className="p-button-outlined p-button-info"
            style={{ float: "right" }}
          />
        </div>

      </div>

      <CustomComponent />

      <TableInfo columns={columns} data={tableInfo} handleTableData={handleTableData} />

      {/* <DataTablePaginator/> */}
      
    </div>
  );
};

export default Dashboard;