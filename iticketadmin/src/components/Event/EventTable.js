import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function EventTable() {
    let count = 0;

    const [events, setEvent] = useState([]);

    useEffect(() => {
        loadEvents();

    }, []);

    const loadEvents = async () => {
        const result = await axios.get("/api/Event/GetAllEvents");
        setEvent(result.data);

    }


    return (

        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title d-flex justify-content-between">Event
                        <Link to='/eventcreate' className="btn btn-success btn-fw">Create Event</Link>
                    </h4>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th> Event name </th>
                                <th> Date </th>
                                <th> Progress </th>
                                <th> Amount </th>
                                <th> Settings </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                                events.map((levent =>                                    
                                    <tr key={levent}>
                                        <td>{++count}</td>
                                        <td className="py-1">
                                            {levent.name}
                                        </td>
                                        <td> {levent.date.substring(0, 10)} </td>
                                        <td>
                                            <div className="progress">
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </td>
                                        <td> $ {levent.price} </td>
                                        <td> <i className="fas fa-trash-alt"></i> </td>
                                        
                                    </tr>
                                ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default EventTable