import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const Login = () => {

    const { setAccessToken, setRefreshToken, setUser } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // TODO: make a constants file for baseURL
        let baseURL = 'http://localhost:8000/';
        const response = await axios.post(`${baseURL}auth/jwt/create/`, {
            username: formData.username,
            password: formData.password
        });

        let data = response.data;
        if (response.status === 200) {
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            setAccessToken(data.access);
            setRefreshToken(data.refresh);

            let user = jwtDecode(data.access);
            localStorage.setItem('user', JSON.stringify(user));
            setUser(user);

            navigate('/');
        } else {
            console.error('Login failed:', data);
            alert('Login failed. Please try again.');
            console.log(data);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <p>This is the login page.</p>

            <form
                onSubmit ={handleSubmit}
            >
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
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
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
            
        </div>
    );
}

export default Login;