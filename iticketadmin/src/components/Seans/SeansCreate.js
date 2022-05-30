import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import Swal from "sweetalert2";

function SeansCreate() {
     //Prop for api start
     const [name, setName] = useState();
     const [hour, setHour] = useState();
 
     //Prop for api end

     async function create(e) {
        e.preventDefault();
        await axios.post('/api/Seans/CreateSeans', {

            Name: name,
            Hour: hour,
          

        }, { 'Content-Type': 'multipart/form-data' })
            .then(function (response) {
                
                Swal.fire(
                     name,
                    'Created',
                    'success'
                )
            })
            .catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })

            });



    }
  return (
    <div className='container'>
            <Form onSubmit={(e) => create(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Seans Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Seans Name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>
             
             
            
                <Form.Group className="mb-3" controlId="formBasicDatetime">
                    <Form.Label>Event Date</Form.Label>
                    <Form.Control type='datetime-local' placeholder="Hour Date" onChange={(e) => setHour(e.target.value)} />
                </Form.Group>
           
               
              
                <Button variant="primary" type="submit" className='mt-3' >
                    Submit
                </Button>
            </Form>
        </div>
  )
}

export default SeansCreate