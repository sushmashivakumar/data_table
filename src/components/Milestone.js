
import React, { useState, useEffect } from 'react';
import { Button } from "primereact/button";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Dialog } from "primereact/dialog";
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import './DataTableDemo.css';

import { Rating } from 'primereact/rating';

const Milestone = ({ tab, reset }) => {
    const [date3, setDate3] = useState(null);
  //   const [products, setProducts] = useState([]);
  //   const [displayBasic2, setDisplayBasic2] = useState(true);
  //   const productService = new ProductService();
  //   const title = tab.charAt(0).toUpperCase() + tab.slice(1);
    
  // const onHide = (name) => {
  //   reset("");
  //   setDisplayBasic2(false);
  // };
  // const renderFooter = (name) => {
  //   return (
  //     <div>
  //       <Button
  //         label="Submit"
  //         icon="pi pi-check"
  //         onClick={() => onHide(name)}
  //         autoFocus
  //       />
  //     </div>
  //   );
  // };

  //   useEffect(() => {
  //       productService.getProductsSmall().then(data => setProducts(data));
  //   }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [products, setProducts] = useState([]);
  const [displayBasic2, setDisplayBasic2] = useState(true);
  const productService = new ProductService();
//   const title = tab.charAt(0).toUpperCase() + tab.slice(1);
  const title = "Milestone";
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

//   const formatCurrency = (value) => {
//       return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
//   }

  const dateTemplate = (rowData) => {
      return  <div className="field col-12 md:col-6">
      {/* <label htmlFor="icon">Date</label> */}
      <Calendar id="icon" value={date3} onChange={(e) => setDate3(e.value)} showIcon />
  </div>
    //   return <img src={`images/product/${rowData.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
  }



//   const header = (
//       <div className="table-header">
//           Milestone
//           {/* <Button icon="pi pi-refresh" /> */}
//       </div>
//   );
//   const footer = `In total there are ${products ? products.length : 0} products.`;
    return (
      <Dialog
    //   header={title}
      visible={displayBasic2}
      style={{ width: "40vw" }}
      footer={renderFooter("displayBasic2")}
      onHide={() => onHide("displayBasic2")}
    >
         <div className="datatable-templating-demo">
            <div className="card">
                <DataTable value={products} responsiveLayout="scroll" className="datatable-milestone">
                    <Column field="milestone" header="Milestone"></Column>
                    <Column header="Date" body={dateTemplate}></Column>
                    {/* <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
                    <Column header="Status" body={statusBodyTemplate}></Column> */}
                </DataTable>
            </div>
        </div>
        </Dialog>
    );
}
export default Milestone;

                 