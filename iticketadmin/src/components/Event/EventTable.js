import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from "react-pagination-bar"
import axios from 'axios';

function EventTable() {
   

    const [events, setEvent] = useState([]);
    const [tot, setTot] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    

    const pagePostsLimit = 5;
    let count = ((currentPage - 1) * pagePostsLimit);

    
    

    const loadEvents = async () => {
        debugger
        let token = JSON.parse(localStorage.getItem('token'))
        const result = await axios.get("https://localhost:44351/api/Event/GetAllEvents", { headers: { "Authorization": `Bearer ${token}` } });
        setEvent(result.data);
        setTot(result.data.length)
        console.log(token);
    }
    const deleteEvent = async id => {
        await axios.delete(`/api/Event/DeleteEvent/${id}`);
        loadEvents();
    }

    const UpdateEvent = async id => {
        console.log(id);
    }


    useEffect(() => {
        loadEvents();
    }, []);
    return (

        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title d-flex justify-content-between">Events
                        <Link to='/eventcreate' className="btn btn-success btn-fw">Create Event</Link>
                    </h4>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th> Event Image </th>
                                <th> Event Name </th>
                                <th> Date </th>
                                
                                <th> Amount </th>
                                <th> Settings </th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                events.slice((currentPage - 1) * pagePostsLimit, currentPage * pagePostsLimit).map((levent =>                                    
                                    <tr key={levent.id}>
                                        <td>{++count}</td>
                                        <td className="py-1">
                                          <img style={{width:'100px', height:'70px',borderRadius:'unset'}} src={`data:image/jpeg;base64,${levent.detailImage}`} alt="" />
                                        </td>
                                        <td className="py-1">
                                            {levent.name}
                                        </td>
                                        <td> {levent.date.substring(0, 10)} </td>
                                      
                                        <td> {levent.price} ₼  </td>
                                        <td><Link to={`/eventupdate/${levent.id}`}  ><button className='btn btn-outline-warning' onClick={()=> UpdateEvent(levent.id)} ><i className="far fa-edit"></i></button></Link>  <button className='btn btn-outline-danger' onClick={() => deleteEvent(levent.id)}> <i className="fas fa-trash-alt"></i></button> </td>
                                        
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

export default EventTable