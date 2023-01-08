import axios from 'axios';
import React, { Component } from 'react';
import UserDetails from './UserDetails';

export default class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    getUserInformation = () => {
        const USER_URL = "https://jsonplaceholder.typicode.com/users"

        axios.get(USER_URL)
            .then(res => {
                //console.log(res);
                this.setState({
                    ...this.state,
                    users: res.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    onGetUserClick = (event, uid) => {
        event.preventDefault()
        this.getUserByID(uid)
    }

    componentDidMount = () => {
        this.getUserInformation()
    }

    getUserByID = async (uid) => {
        const USER_URL = `https://jsonplaceholder.typicode.com/users/${uid}`
        try {
            const res = await axios.get(USER_URL)
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }

    }

    render() {
        return (
            <div>
                <h2>User List</h2>
                {
                    this.state.users.map(user => (
                        <div key={user.id} >
                            <UserDetails user={user} />
                            <button onClick={(event) => this.onGetUserClick(event)}>View</button>
                            <button onClick={(event) => this.onGetUserClick(event)}>Update</button>
                            <button onClick={(event) => this.onGetUserClick(event)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        );
    }
}

