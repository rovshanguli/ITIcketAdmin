import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function UpdateEvent(props) {
  const { id } = useParams();
  //Prop for api start

  const [name, setName] = useState();

  const [price, setPrice] = useState();
  const [date, setDate] = useState();
  const [category, setCategory] = useState();

  const [bgimg, setbgImg] = useState();
  const [img, setImg] = useState();
  const [detailimg, setdetailImg] = useState();


  // const [category, setCategory] = useState();
  // const [hall, setHall] = useState();



  const [newname, setnewName] = useState();
  const [newprice, setnewPrice] = useState();
  const [newcategory, setnewCategory] = useState();
  const [newhall, setnewHall] = useState();
  const [newbgimg, setnewbgImg] = useState();
  const [newimg, setnewImg] = useState();
  const [newdetailimg, setnewdetailImg] = useState();
  const [newdate, setnewDate] = useState();


  function initPromise() {
debugger
    const response = axios.get(`/api/Event/GetById/${id}`)
    return new Promise(function (res, rej) {
      res(response);
    })
  }

  async function update(e) {

    e.preventDefault();
    await axios.put(`/api/Event/UpdateEvent/${id}`, {
      Id: id,
      Name: newname,
      Date: newdate,
      Price: newprice,
      CategoryId: newcategory,
      HallId: newhall,
      Image: newimg,
      BackImage: newbgimg,
      DetailImage: newdetailimg


    }, { 'Content-Type': 'multipart/form-data' })
      .then(function (response) {

        Swal.fire(
          newname,
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

  const [halls, setHalls] = useState([]);
  const [categories, setCategories] = useState([]);

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
    setHalls(result.data);
  }

  const loadCategories = async () => {
    const result = await axios.get("/api/Category/GetAllCategories");
    setCategories(result.data);
  }

  function base64Img(file) {
    var base64String = getBase64(file);
    base64String.then(function (result) {
      setnewImg(result)
    });

  }

  function base64BgImg(file) {
    var base64String = getBase64(file);
    base64String.then(function (result) {
      setnewbgImg(result)
    });

  }

  function base64DetailImg(file) {
    var base64String = getBase64(file);
    base64String.then(function (result) {
      setnewdetailImg(result)
    });

  }



  useEffect(() => {
    loadHalls();
    loadCategories();
  }, []);




  useEffect(() => {
    
    initPromise()
      .then(function (result) {
        // "initResolve"
        return result.data;
      })
      .then(function (result) {
        setName(result.name) // "normalReturn"
        setImg(result.img)
        setbgImg(result.backimage)
        setdetailImg(result.detailImage)
        setDate(result.date)
    
        setCategory(result.category);
        setPrice(result.price)
      });
  });
  return (
    <div className='container'>
      <div className='updaimg'>
        <img className='updateimg mb-3' src={`data:image/jpeg;base64,${detailimg}`} alt="" />
      </div>
      <Form onSubmit={(e) => update(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Event Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Event Name" onChange={(e) => setnewName(e.target.value)} defaultValue={name} />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>BackGround Image</Form.Label>
          <Form.Control type="file" onChange={(e) => base64BgImg(e.target.files[0])} defaultValue={bgimg} />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" onChange={(e) => base64Img(e.target.files[0])} defaultValue={img} />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Detail Image</Form.Label>
          <Form.Control type="file" onChange={(e) => base64DetailImg(e.target.files[0])} defaultValue={detailimg} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDatetime">
          <Form.Label>Event Date</Form.Label>
          <Form.Control type='datetime-local' placeholder="Event Date" onChange={(e) => setnewDate(e.target.value)} defaultValue={date} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Event Price" onChange={(e) => setnewPrice(e.target.value)} defaultValue={price} />
        </Form.Group>
        <FormGroup className='mt-2'>
          <Form.Select aria-label="Event Category" onChange={(e) => setnewCategory(e.target.value)} defaultValue={category}>
    
            {categories.map((category =>
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </Form.Select>
        </FormGroup>
        <FormGroup onChange={(e) => setnewHall(e.target.value)} className='mt-2'>
          <Form.Select aria-label="Event Hall">
       
            {halls.map((hall =>
              <option key={hall.id} value={hall.id}>{hall.name}</option>
            ))}
          </Form.Select>
        </FormGroup>
        <Button variant="primary" type="submit" className='mt-3' >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default UpdateEvent