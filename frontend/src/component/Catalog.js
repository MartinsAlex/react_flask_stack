import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';



function Catalog() {

    const [dataLoaded, setDataLoaded] = useState();
    const [result, setResult] = useState()

    const gridRef = useRef();
    const [rowData] = useState([
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
      ]);

      const gridOptions = {
        defaultColDef: {
          sortable: true,
          editable: false,
          filter: true,
        },
        columnDefs: [
          {
            field: 'make',
          },
          {
            field: 'model',
          },
          {
            field: 'price',
          }
        ],
      };

      const onRowSelected = (params) => {
        console.log({
           id: params.data.make,
           name: params.data.model,
           username: params.data.price,
           email: params.data.email,
           phone: params.data.phone,
           website: params.data.website,
         });
       };



    useEffect(() => {
        // Update the document title using the browser API
        axios.get('/api/test')
            .then(function (response) {
                // handle success
                console.log(response);
                setDataLoaded(true)
                setResult(response.data.test)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, []);


    return (<>

        <div class="jumbotron d-flex align-items-center min-vh-100">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                {dataLoaded && <> <h1 className="d-flex aligns-items-center justify-content-center">{result}</h1></>}

                                <div
                                    className="grid ag-theme-alpine-dark"
                                    style={{ height: 300, width: 1000 }}
                                >
                                    <AgGridReact
                                        ref={gridRef}
                                        rowData={rowData}
                                        gridOptions={gridOptions}
                                        rowSelection={'single'}
                                        onRowSelected={onRowSelected}
                                    />

                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>







    </>)

}


export default Catalog;