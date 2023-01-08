import './AddEdit.css';
import React, { useState, useEffect } from 'react';
import {  useNavigate ,useLocation } from "react-router-dom";
import {toast} from "react-toastify";

import axios from 'axios';


const initialState = {
    fName: "",
    lName: "",
    email: ""
};

function AddEdit() {
    const [state, setState] = useState(initialState);

    const { fName, lName, email } = state;

    const navigate = useNavigate();

    const addContact = async (data) => {
        const response = await axios.post(`http://localhost:4000/user`, data);
        if (response.status === 200) {
            toast.success(response.data)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log();
        if (!fName || !lName || !email) {
            toast.error("Please provide value!!");
        } else {
            addContact(state);
            navigate("/");
        }
    }

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
        
    };
    return (
        <div style={{ marginTop: "100px" }}>
            <form style={{ margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center" }} onSubmit={handleSubmit}>

                <label htmlFor="fName">First Name</label>
                <input type="text" name="fName" id="fName" placeholder='First Name...' onChange={handleInputChange} value={fName} />

                <label htmlFor="lName">Last Name</label>
                <input type="text" name="lName" id="lName" placeholder='Last Name...' onChange={handleInputChange} value={lName} />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='Email Address...' onChange={handleInputChange} value={email} />

                <input type="submit" value="Add"></input>

            </form>
        </div>
    );
}

export default AddEdit;