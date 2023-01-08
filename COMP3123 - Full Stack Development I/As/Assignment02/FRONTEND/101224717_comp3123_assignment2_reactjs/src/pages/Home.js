import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import axios from "axios"

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const respone = await axios.get(`http://localhost:4000/users`);
        if (respone.status === 200) {
            setData(respone.data);
        }
    };

    console.log("data=>", data);

    return (
        <div style={{ marginTop: "150px" }}>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>No.</th>
                        <th style={{ textAlign: "center" }}>Employee First Name</th>
                        <th style={{ textAlign: "center" }}>Employee Last Name</th>
                        <th style={{ textAlign: "center" }}>Employee Email</th>
                        <th style={{ textAlign: "center" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>{item.fName}</td>
                                <td>{item.lName}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Link to={`/add-employee/${item.id}`}>
                                    <button className='btn btn-edit'>Edit</button>
                                    </Link>
                                    <button className='btn btn-delete'>Delete</button>
                                    <Link to={`/view-employee/${item.id}`}>
                                    <button className='btn btn-view'>View</button>
                                    </Link>
                                </td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Home;