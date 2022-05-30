import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HallTable() {

    let count = 0;

    const [halls, setHall] = useState([]);

    useEffect(() => {
        loadHalls();

    }, []);

    const loadHalls = async () => {
        const result = await axios.get("/api/hall/getallhalls");
        setHall(result.data);

    }

    const deleteHall = async id => {
   
        await axios.delete(`/api/Hall/DeleteHall/${id}`);
        loadHalls();
    }

    const HallUpdate = async id =>{
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
                                halls.map((hall =>
                                    <tr key={hall.id}>
                                        <td>{++count}</td>
                                        <td className="py-1">
                                            {hall.name}
                                        </td>
                                        <td> {hall.address} </td>
                                        <td> {hall.place} </td>
                                        <td><Link to={`/hallupdate/${hall.id}`}  ><button className='btn btn-outline-warning' onClick={()=> HallUpdate(hall.id)} ><i className="far fa-edit"></i></button></Link>  <button className='btn btn-danger' onClick={() => deleteHall(hall.id)}> <i className="fas fa-trash-alt"></i></button> </td>
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

export default HallTable