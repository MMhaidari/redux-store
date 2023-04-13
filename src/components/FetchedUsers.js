import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const FetchedUsers = () => {
    const { users, isloading, error } = useSelector((store) => store.users);

    if (isloading === true ) return <div className="loading">Loading...</div>;

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <div>{user.firstName}</div>
                    <div>{user.lastName}</div>
                </div>
            ))}
        </div>
    );
}

export default FetchedUsers;
