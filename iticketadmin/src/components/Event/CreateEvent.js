import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup } from 'react-bootstrap';
import axios from 'axios';


function CreateEvent() {

    //Prop for api start
    const [name, setName] = useState();
    const [img, setImg] = useState();
    const [bgImg, setbgImg] = useState();
    const [date, setDate] = useState();
    const [price, setPrice] = useState();
    const [categoryId, setcategoryId] = useState();
    const [hallId, sethallId] = useState();
    //Porp for api end


    const [halls, setHall] = useState([]);
    const [categories, setCategory] = useState([]);

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.replace('data:', '')
            .replace(/^.+,/, ''))
            reader.onerror = error => reject(error);
        });
    }




    const loadHalls = async () => {
        const result = await axios.get("/api/Hall/GetAllHalls");
        setHall(result.data);
    }

    const loadCategories = async () => {
        const result = await axios.get("/api/Category/GetAllCategories");
        setCategory(result.data);
    }

    

    async function create(e) {
        setDate("2022-05-20T15:54:12.224Z")
        e.preventDefault();
        await axios.post('/api/event/createEvent', {
            
            Name: name,
            Image: img,
            Date: date,
            BackImage: bgImg,
            Price: price,
            CategoryId: categoryId,
            HallId: hallId

          }, {'Content-Type': 'multipart/form-data' })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
            
          });
          
    }

    function base64Img(file) {
        var base64String = getBase64(file);
        base64String.then(function (result) {
            setImg(result)
        });

    }

    function base64BgImg(file) {
        var base64String = getBase64(file);
        base64String.then(function (result) {
            setbgImg(result)
        });

    }

    useEffect(() => {
        loadHalls();
        loadCategories();
    }, []);






    return (
        <div className='container'>
            <Form onSubmit={(e) => create(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Event Name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>BackGround Image</Form.Label>
                    <Form.Control type="file" onChange={(e) => base64BgImg(e.target.files[0])} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" onChange={(e) => base64Img(e.target.files[0])} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDatetime">
                    <Form.Label>Event Date</Form.Label>
                    <Form.Control type="date" placeholder="Event Date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Event Price" onChange={(e) => setPrice(e.target.value)}/>
                </Form.Group>
                <FormGroup>
                    <Form.Select aria-label="Event Category" onChange={(e) => setcategoryId(e.target.value)}>
                        <option>Open this select menu</option>
                        {categories.map((category =>
                            <option key={category.id} value="3">{category.name}</option>
                        ))}
                    </Form.Select>
                </FormGroup>
                <FormGroup onChange={(e) => sethallId(e.target.value)}>
                    <Form.Select aria-label="Event Hall">
                        <option>Open this select menu</option>
                        {halls.map((hall =>
                            <option key={hall.id} value="3">{hall.name}</option>
                        ))}
                    </Form.Select>
                </FormGroup>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </div>
    )
}



export default CreateEvent