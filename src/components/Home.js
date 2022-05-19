import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import './home.css'
import Topbar from "./Topbar";

function Home() {
  const start = (
    <div style={{ 'textAlign' :'center' }}>
      <img
        alt="logo"
        src="showcase/images/logo.png"
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        height="40"
        className="mr-2"
      ></img>
      <div style={{'fontSize':'24px'}}>Smart Planner</div>
    </div>
  );
  const projects = [
    {
      label: "Project 1",
    },
    {
      label: "Project 2",
    },
    {
      label: "Project 3",
    },
    {
      label: "Project 4",
    },
  ];
  return (
    <div>
      <Topbar />
      {/* <div className="grid">
        <div className="col-4 col-offset-4">
          <div style={{ textAlign : "center", marginTop:'3em' }}>
            {projects.map((project,index) => (
              <div style={{ "marginTop": "10px" }} key={index}>
                <Button
                  label={project.label}
                  className="p-button-outlined p-button-info"
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
