import React from 'react';
import UsersList from '../components/UsersList';

const User = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Stefan Bojkovic',
            image: 'https://pm1.narvii.com/6522/60178f44254c3c4e573c6d25a8ff41739bdaf011_00.jpg',
            places: 3
        }
    ]
    return(
        <UsersList items={USERS} />
    );
}

export default User;