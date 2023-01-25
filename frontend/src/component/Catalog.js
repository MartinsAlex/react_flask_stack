import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import Select from 'react-select';


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
                checkboxSelection: true
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

        if (params.node.selected) {
            setShowNextButton(true)
        } else {
            setShowNextButton(false)
        }

        console.log({
            make: params.data.make,
            model: params.data.model,
            price: params.data.price,
        });
        
    };

    const [showNextButton, setShowNextButton] = useState(false);

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

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      
      const MySelectComponent = () => (
        <Select options={options} isMulti={true}/>
      )

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
                                    
                                    <MySelectComponent/>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    {showNextButton ? <><button>test</button></> : null}
                </div>
            </div>
        </div>







    </>)

}


export default Catalog;