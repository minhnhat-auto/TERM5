import React from 'react';

function UserDetails({user}) {



    return (
        <div>
            <p>{user.name}</p>
            <p>{user.username}</p>


        </div>
    );
}

export default UserDetails;