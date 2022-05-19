
import React, { useState, useEffect } from 'react';
import { Button } from "primereact/button";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Dialog } from "primereact/dialog";

const Milestone = ({ tab, reset }) => {
    const [products, setProducts] = useState([]);
    const [displayBasic2, setDisplayBasic2] = useState(true);
    const productService = new ProductService();
    const title = tab.charAt(0).toUpperCase() + tab.slice(1);
    
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

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <Dialog
      header={title}
      visible={displayBasic2}
      style={{ width: "50vw" }}
      footer={renderFooter("displayBasic2")}
      onHide={() => onHide("displayBasic2")}
    >
        <div>
            <div className="card">
                <DataTable value={products} responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    {/* <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column> */}
                </DataTable>
            </div>
        </div>
        </Dialog>
    );
}
export default Milestone;

                 