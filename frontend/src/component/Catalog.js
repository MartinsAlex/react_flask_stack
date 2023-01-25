import React, { useEffect, useState } from "react";
import axios from 'axios';
import Container from 'react-bootstrap/Container';


function Catalog() {

    const [dataLoaded, setDataLoaded] = useState();
    const [result, setResult] = useState()

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

        
        <div className="container-fluid bg-secondary vh-100" style={{paddingTop:50}}>
            <div className="row">
                <div className="col">
                    {dataLoaded && <> <h1 className=" d-flex aligns-items-center justify-content-center">{result}</h1></>}
                </div>
            </div>
                
        </div>

        




    </>)

}


export default Catalog;