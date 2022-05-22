import React, { useState, useRef, useEffect } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Menubar } from "primereact/menubar";
import TableInfo from "./TableInfo";
import Milestone from "./Milestone";
import { TabMenu } from 'primereact/tabmenu';
import DataTablePaginator from "./DataTablePaginator";
import Mode from "./Mode";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Data } from '../data'
import { loadData } from '../features/tableInfo'


const Dashboard = () => {
  const toast = useRef(null);
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(-1);
  const [columnEdit, setColumnEdit] = useState(false);

  const userStore = useSelector(state => state.userInfo);
  const tableInfo = useSelector(state => state.tableInfo);
  const dispatch = useDispatch();
  const items = [
    { label: 'Milestone', icon: 'pi pi-fw pi-flag-fill'},
    { label: 'Development', icon: 'pi pi-fw pi-slack' },
    { label: 'Validation', icon: 'pi pi-fw pi-check-circle' },
    { label: 'Horizontal', icon: 'pi pi-fw pi-arrows-h' },
    { label: 'Summary', icon: 'pi pi-fw pi-credit-card' }
  ];

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
    { field: "mode", header: "Mode" },
    { field: "q1", header: "Q1" },
    { field: "q2", header: "Q2" },
    { field: "q3", header: "Q3" },
    { field: "q4", header: "Q4" },
    { field: "", header: "Total till PRQ" },
    { field: "estimation_type", header: "Estimation Type" }


  ];

  const CustomComponent = () => {
    if (activeIndex === "milestone")
      return <Milestone tab={activeIndex} reset={setActiveIndex} />;
    if (activeIndex === "mode")
      return <Mode tab={activeIndex} reset={setActiveIndex} />;
  };

  const handleTableData = (data) => {
    const newTableInfo = tableInfo.map((table, index) => {
      if (index === data.rowIndex) {
        return { ...table, ...data.newRowData }
      }
      return table
    })
    dispatch(loadData(newTableInfo))

  }

  const handleColumnEdit = () => {
    setColumnEdit(true);
  }

  const handleCancelEdit = () => {
    setColumnEdit(false);
  }


  useEffect(() => {
    if (!userStore.hasOwnProperty('useremail')) {
      navigate('/');
    }
    dispatch(loadData(Data))
  }, [userStore])

  return (
    <div className="datatable-editing-demo">
      <Toast ref={toast} />
      <Menubar end={<UserInfo />} />
      <div>
        <div className="card">
          {/* <h5>Default</h5> */}
          {/* <TabMenu model={items} onClick={(e) => console.log("result")} */}
          <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => {
            console.log(e);
            setActiveIndex(e.index)
          }} />





        </div>

      </div>

      {/* <div className="card">
        <div className="pt-3">
        
          <Button
            onClick={() => setActiveIndex("milestone")}
            className="p-button-text"
            style={{color:"grey"}}
            label="Milestone"
          />

          {columnEdit ? (
           <Button
            // label="Cancel"
            className="p-button-rounded p-button-outlined"
            icon="pi pi-times"
            style={{ float: "right",color:"grey" }}
            onClick={handleCancelEdit}
          />
          ): (
          <Button
            label="Edit"
            className="p-button-rounded p-button-outlined"
            
            icon="pi pi-user-edit"
            style={{ float: "right",color:"grey"}}
            onClick={handleColumnEdit}
          />
          )}
        </div>

      </div> */}


      <CustomComponent />

      {
        activeIndex === 0 && (
          <Milestone
            tab={activeIndex}
            reset={setActiveIndex}
            colEdit={columnEdit}
          />
        )

      }
      <div>
        {columnEdit ? (
          <Button
            // label="Cancel"
            className="p-button-rounded p-button-outlined mb-2"
            icon="pi pi-times"
            style={{ color: "grey" }}
            onClick={handleCancelEdit}
          />
        ) : (
          <Button
            label="Edit"
            className="p-button-rounded p-button-outlined mb-2"

            icon="pi pi-user-edit"
            style={{ color: "grey" }}
            onClick={handleColumnEdit}
          />
        )}
        <TableInfo
          columns={columns}
          data={tableInfo}
          handleTableData={handleTableData}
          colEdit={columnEdit}

        />

        {/* <DataTablePaginator/> */}
      </div>
    </div>
  );
};

export default Dashboard;