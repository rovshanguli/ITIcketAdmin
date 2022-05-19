import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Table() {

    const [events, setEvent] = useState([]);

    useEffect(() => {
        loadOrders();

    }, []);

    const loadOrders = async () => {

        const result = await axios.get("https://localhost:44351/api/Event/GetAllEvents");
        setEvent(result.data);

    }


    return (

        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title d-flex justify-content-between">Event
                        <NavLink to='createevent'><button type="button" className="btn btn-success btn-fw">Create Event</button></NavLink>
                    </h4>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th> Event name </th>
                                <th> Location </th>
                                <th> Progress </th>
                                <th> Amount </th>
                                <th> Deadline </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                events.map((levent =>
                                    <tr>
                                        <td className="py-1">
                                            <img src={require('../assets/images/faces-clipart/pic-1.png')} alt="" />
                                        </td>
                                        <td> {levent.name} </td>
                                        <td>
                                            <div className="progress">
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </td>
                                        <td> $ {levent.price} </td>
                                        <td> {levent.date} </td>
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

export default Table