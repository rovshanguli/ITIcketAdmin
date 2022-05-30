import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function HallUpdate(props) {
    const { id } = useParams();
    //Prop for api start
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [place, setPlace] = useState();
    const [newName, setnewName] = useState();
    const [newaddress, setnewAddress]= useState();
    const [newplace, setnewPlace]= useState();

    function initPromise() {
 
        const response = axios.get(`/api/Hall/GetById/${id}`)
        return new Promise(function (res, rej) {
            res(response);
        })
    }

    async function update(e) {
     
        e.preventDefault();
        await axios.put(`/api/Hall/UpdateHall/${id}`, {
            Id: id,
            Name: newName,
            Address: newaddress,
            Place: newplace

        }, { 'Content-Type': 'multipart/form-data' })
            .then(function (response) {

                Swal.fire(
                    newName,
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
                setAddress(result.address)
                setPlace(result.place)
            });
    });



    //Prop for api end
    return (
     

            <div className='container'>
                <Form onSubmit={(e) => update(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Hall Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Hall Name" onChange={(e) => setnewName(e.target.value)} defaultValue={name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Hall Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Hall Address" onChange={(e) => setnewAddress(e.target.value)} defaultValue={address} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Place</Form.Label>
                        <Form.Control type="number" placeholder="Enter Hall Place" onChange={(e) => setnewPlace(e.target.value)} defaultValue={place} />
                    </Form.Group>





                    <Button variant="primary" type="submit" className='mt-3' >
                        Submit
                    </Button>
                </Form>
            </div>
      
    )
}

export default HallUpdate