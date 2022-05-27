import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from "sweetalert2";


function UpdateCategory(props) {
    const { id } = useParams();
    //Prop for api start
    const [name, setName] = useState();
    const [newName, setnewName] = useState();
    
    function initPromise() {
        const response = axios.get(`/api/Category/GetById/${id}`)
        return new Promise(function (res, rej) {
            res(response);
        })
    }

    async function update(e) {

        e.preventDefault();
        await axios.put(`/api/Category/Update`, {
            Id: id,
            Name: newName,

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
            });
    });



    //Prop for api end

    return (
        <div className='container'>
            <Form onSubmit={(e) => update(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Hall Name</Form.Label>
                    <Form.Control type="text" onChange={(e) => setnewName(e.target.value)} defaultValue={name} />
                </Form.Group>

                <Button variant="primary" type="submit" className='mt-3' >
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default UpdateCategory