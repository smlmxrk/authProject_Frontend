import React, {useEffect, useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';

interface User {
    id: number;
    name: string;
    email: string;
}

const Dashboard: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        fetch('/api/user')
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, []);


    // @ts-ignore
    return (
        <div>
            <h1>User Dashboard</h1>
            <div>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
            </div>
            ): (
            <p>Loading user info...</p>
        </div>
    );
};

export default Dashboard;
