import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosInterceptor from "../hooks/useAxiosInterceptor";

const Register = () => {

    const axios = useAxiosInterceptor();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // TODO: make a constants file for baseURL
        let baseURL = 'http://localhost:8000/';
        const response = await axios.post(`${baseURL}auth/users/`, {
            username: formData.username,
            email: formData.email,
            password: formData.password
        });

        let data = response.data;
        if (response.status === 201) {
            console.log('Registration successful:', data);
            navigate('/login');
        } else {
            console.error('Registration failed:', data);
            alert('Registration failed. Please try again.');
            console.log(data);
        }

    }

    return (
        <div>
            <h1>Register</h1>
            <p>This is the registration page.</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
}

export default Register;