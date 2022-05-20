import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup } from 'react-bootstrap';
import axios from 'axios';


function CreateEvent() {


    function getBase64(file) {
        debugger
        if (file != null) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                setImg(reader.result)
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }
    }

    const [halls, setHall] = useState([]);
    const [img, setImg] = useState(null);
    const [categories, setCategory] = useState([]);


    const loadHalls = async () => {
        const result = await axios.get("/api/Hall/GetAllHalls");
        setHall(result.data);
    }

    const loadCategories = async () => {
        const result = await axios.get("/api/Category/GetAllCategories");
        setCategory(result.data);
    }

    function test(file) {
        setImg(file);
    }



    useEffect(() => {
        loadHalls();
        loadCategories();
    }, []);


    let str = getBase64(img);

    console.log(str)


    return (
        <div className='container'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Event Name" />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>BackGround Image</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" onChange={(e) => test(e.target.files[0])} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDatetime">
                    <Form.Label>Event Date</Form.Label>
                    <Form.Control type="date" placeholder="Event Date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Event Price" />
                </Form.Group>
                <FormGroup>
                    <Form.Select aria-label="Event Category">
                        <option>Open this select menu</option>
                        {categories.map((category =>
                            <option key={category.id} value="3">{category.name}</option>
                        ))}
                    </Form.Select>
                </FormGroup>
                <FormGroup>
                    <Form.Select aria-label="Event Hall">
                        <option>Open this select menu</option>
                        {halls.map((hall =>
                            <option key={hall.id} value="3">{hall.name}</option>
                        ))}
                    </Form.Select>
                </FormGroup>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}



export default CreateEvent