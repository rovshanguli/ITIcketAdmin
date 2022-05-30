import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
 import '../../assets/Sass/Slider/sliderupdate.css'

function SliderUpdate(props) {
  const { id } = useParams();
  //Prop for api start
  const [image, setImage] = useState();

  const [newImage, setnewImage] = useState();


  function initPromise() {

    const response = axios.get(`/api/Slider/GetById/${id}`)
    return new Promise(function (res, rej) {
      res(response);
    })
  }

  async function update(e) {

    e.preventDefault();
    await axios.put(`/api/Slider/Update/${id}`, {
      Id: id,
      Image: newImage


    }, { 'Content-Type': 'multipart/form-data' })
      .then(function (response) {

        Swal.fire(
          'Slider',
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
        setImage(result.image) // "normalReturn"

      });
  });



  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.replace('data:', '')
        .replace(/^.+,/, ''))
      reader.onerror = error => reject(error);
    });
  }
  function base64Img(file) {
    var base64String = getBase64(file);
    base64String.then(function (result) {
      setnewImage(result)
    });

  }

  //Prop for api end



  return (
    <div className='container'>
      <div className='updaimg'>
        <img className='updateimg mb-3' src={`data:image/jpeg;base64,${image}`} alt="" />
      </div>

      <Form onSubmit={(e) => update(e)}>


        <Form.Group controlId="formFile" className="mb-3 mt-5">
          <Form.Label>Image</Form.Label>
          <Form.Control className='slideup' type="file" onChange={(e) => base64Img(e.target.files[0])} />
        </Form.Group>




        <Button variant="primary" type="submit" className='mt-3' >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default SliderUpdate