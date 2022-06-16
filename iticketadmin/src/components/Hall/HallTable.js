import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from "react-pagination-bar"
import 'react-pagination-bar/dist/index.css'
import axios from 'axios';

function HallTable() {

    const [halls, setHall] = useState([]);
    const [tot, setTot] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    

    const pagePostsLimit = 5;
    let count = ((currentPage - 1) * pagePostsLimit);

  

    function initPromise() {
        let token = JSON.parse(localStorage.getItem('token'))
        axios.get(`https://localhost:44351/api/hall/getallhalls`, { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {
                setHall(res.data);
           
                setTot(res.data.length)
            })
    }
    
  

    useEffect(() => {        
        initPromise();
    }, []);

    const deleteHall = async id => {
        await axios.delete(`/api/Hall/DeleteHall/${id}`);
    }

    const HallUpdate = async id => {
        console.log(id);
    }
    
    return (
       
        <div className="col-lg-12 grid-margin stretch-card">
            
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title d-flex justify-content-between">Halls
                        <Link to='/hallcreate' className="btn btn-success btn-fw">Create Hall</Link>
                    </h4>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th> Hall name </th>
                                <th> Hall Address </th>
                                <th> Place </th>
                                <th> Settings </th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                halls.slice((currentPage - 1) * pagePostsLimit, currentPage * pagePostsLimit).map((hall =>
                                    <tr key={hall.id}>
                                        <td>{++count}</td>
                                        <td className="py-1">
                                            {hall.name}
                                        </td>
                                        <td> {hall.address} </td>
                                        <td> {hall.place} </td>
                                        <td><Link to={`/hallupdate/${hall.id}`}  ><button className='btn btn-outline-warning' onClick={() => HallUpdate(hall.id)} ><i className="far fa-edit"></i></button></Link>  <button className='btn btn-outline-danger' onClick={() => deleteHall(hall.id)}> <i className="fas fa-trash-alt"></i></button> </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>

                <Pagination
                    startLabel={false}
                    endLabel={false}
                    onlyPageNumbers={true}
                    initialPage={currentPage}
                    itemsPerPage={pagePostsLimit}
                    totalItems={tot}
                    onPageСhange={(pageNumber) => setCurrentPage(pageNumber)}
                    pageNeighbours={1}
                    nextLabel={'>'}
                    prevLabel={'<'}
                />


            </div>
        </div>

    )
}

export default HallTable