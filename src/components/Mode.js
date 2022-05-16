import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
// import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

const Mode = ({ tab, reset }) => {
  const [displayBasic2, setDisplayBasic2] = useState(true);
  const [selectedCity1, setSelectedCity1] = useState(null);

  const onCityChange = (e) => {
    setSelectedCity1(e.value);
}

const milestone1 = [
  { name: 'Low' },
  { name: 'Medium'},
  { name: 'Heavy' },
  
];

  const onHide = (name) => {
    reset("");
    setDisplayBasic2(false);
  };

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
  return (
    <Dialog
      header={title}
      visible={displayBasic2}
      style={{ width: "50vw" }}
      footer={renderFooter("displayBasic2")}
      onHide={() => onHide("displayBasic2")}
    >
      <div class="grid">
        <div class="col-8 col-offset-4">
          <div className="field">
            <label htmlFor="username1" className="block">
              Mode
            </label>
            <Dropdown value={selectedCity1} options={milestone1} onChange={onCityChange} variant="outlined info"optionLabel="name" placeholder="Select Mode" />
            {/* <InputText
              id="username1"
              aria-describedby="username1-help"
              className="block"
            /> */}
          </div>
        </div>
      </div>
      <br />
    </Dialog>
  );
};

export default Mode;
