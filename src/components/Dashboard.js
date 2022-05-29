import React, { useState, useRef, useEffect } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Menubar } from "primereact/menubar";
import TableInfo from "./TableInfo";
import Milestone from "./Milestone";
import Prognos from "./Prognos";
import { TabMenu } from "primereact/tabmenu";
import Mode from "./Mode";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Data, SummaryColumns, SummaryData } from "../data";
import { loadData } from "../features/tableInfo";
import {ColumnGroup} from "primereact/columngroup";
import {Row} from "primereact/row";
import { Column } from "primereact/column";

const Dashboard = () => {
  const toast = useRef(null);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(-1);
  const [columnEdit, setColumnEdit] = useState(false);

  const userStore = useSelector((state) => state.userInfo);
  const tableInfo = useSelector((state) => state.tableInfo);
  const dispatch = useDispatch();
  const items = [
    { label: "Summary", icon: "pi pi-fw pi-credit-card" },
    { label: "Milestone", icon: "pi pi-fw pi-flag-fill" },
    { label: "Development", icon: "pi pi-fw pi-slack" },
    { label: "Validation", icon: "pi pi-fw pi-check-circle" },
    { label: "Horizontal", icon: "pi pi-fw pi-arrows-h" },
    { label: "Prognos", icon: "pi pi-fw pi-sitemap" },
   
  ];

  // const UserInfo = () => {
  //   return <div> Welcome, Sushma</div>;
  // };

  const columns = [
    { field: "features", header: "Features" },
    { field: "feature_owner", header: "Feature Owner" },
    { field: "function", header: "Function" },
    { field: "function_owner", header: "Function Owner" },
    { field: "domain", header: "Domain" },
    { field: "status", header: "Feature ON/OFF" },
    { field: "mode", header: "Feature Mode" },
    { field: "q1", header: "Q1" },
    { field: "q2", header: "Q2" },
    { field: "q3", header: "Q3" },
    { field: "q4", header: "Q4" },
    { field: "", header: "Total till PRQ" },
    { field: "estimation_type", header: "Estimation Type" },
  ];

  const CustomComponent = () => {
    let componentRender = "";
    switch (activeIndex) {
      case 0:
        componentRender = (
          <TableInfo columns={SummaryColumns} data={SummaryData} />
        );
        break;
      case 1:
        componentRender = (
          <Milestone
            tab={activeIndex}
            reset={setActiveIndex}
            colEdit={columnEdit}
          />
        );
        break;
        case 5:
          componentRender = (
            <Prognos/>
          );
          break;
      default:
        break;
    }
    return componentRender;
  
  };

  const handleTableData = (data) => {
    const newTableInfo = tableInfo.map((table, index) => {
      if (index === data.rowIndex) {
        return { ...table, ...data.newRowData };
      }
      return table;
    });
    dispatch(loadData(newTableInfo));
  };

  const handleColumnEdit = () => {
    setColumnEdit(true);
  };

  const handleCancelEdit = () => {
    setColumnEdit(false);
  };

  let headerGroup = <ColumnGroup>
  <Row>
      <Column header="" rowSpan={1} colSpan={7}/>
      <Column header="SI Milestone" colSpan={3} />
      <Column header="PO" />
      <Column header="A1" />
      <Column header="PRQ" />


  </Row>
  <Row>
      <Column header=""  rowSpan={1} colSpan={7} />
      <Column header="SI Milestone" colSpan={3} />
      <Column header="Alpha" />
      <Column header="Beta" />
      <Column header="PV" />
  </Row>
  <Row>
     
     {
       columns.map(column => {
         return <Column header={column.header}/>
       })
     }
  </Row>
</ColumnGroup>;

  useEffect(() => {
    if (!userStore.hasOwnProperty("useremail")) {
      navigate("/");
    }
    dispatch(loadData(Data));
  }, [userStore]);

  return (
    <div className="datatable-editing-demo">
      <Toast ref={toast} />
      {/* <Menubar end={<UserInfo />} /> */}
      <div>
        <div className="card">
          <TabMenu
            model={items}
            activeIndex={activeIndex}
            onTabChange={(e) => {
              console.log(e);
              setActiveIndex(e.index);
            }}
          />
        </div>
      </div>

      <div>
        <div className="edit_button">
          {columnEdit ? (
            <Button
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
        </div>
        <CustomComponent />
        {activeIndex !== 0 ? (
          <TableInfo
            columns={columns}
            data={tableInfo}
            handleTableData={handleTableData}
            colEdit={columnEdit}
            custHeader={true}
            customHeader={headerGroup}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;