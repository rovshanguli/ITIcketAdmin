import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function SeansUpdate(props) {
  const { id } = useParams();
  //Prop for api start
  const [name, setName] = useState();

  const [hour, setHour] = useState();
  const [seansname, setSeansname] = useState();

  const [newhour, setnewHour] = useState();


  function initPromise() {

    const response = axios.get(`/api/Seans/GetById/${id}`)
    return new Promise(function (res, rej) {
      res(response);
    })
  }

  async function update(e) {

    e.preventDefault();
    await axios.put(`/api/Seans/UpdateSeans/${id}`, {
      Id: id,
      Name: seansname,
      Hour: newhour


    }, { 'Content-Type': 'multipart/form-data' })
      .then(function (response) {

        Swal.fire(
         seansname,
          'Updated',
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



  };



  useEffect(() => {
    initPromise()
      .then(function (result) {
        // "initResolve"
        return result.data;
      })
      .then(function (result) {
        setName(result.name) // "normalReturn"
        setHour(result.hour)

      });
  });



  return (
    <div className='container'>
    <Form onSubmit={(e) => update(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Event Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Seans Name" onChange={(e) => setSeansname(e.target.value)} defaultValue={name} />
        </Form.Group>
     
     
    
        <Form.Group className="mb-3" controlId="formBasicDatetime">
            <Form.Label>Event Date</Form.Label>
            <Form.Control type='datetime-local' placeholder="Hour Date" onChange={(e) => setnewHour(e.target.value)} defaultValue={hour}  />
        </Form.Group>
   
       
      
        <Button variant="primary" type="submit" className='mt-3' >
            Submit
        </Button>
    </Form>
</div>
  )
}

export default SeansUpdate