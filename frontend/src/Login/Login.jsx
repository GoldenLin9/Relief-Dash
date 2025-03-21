import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:8000/auth/jwt/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        let data = await response.json();
        if (response.ok) {
            console.log('Login successful:', data);
            // Store the token or handle login success

            // Redirect to home page after successful login
            navigate('/');
        } else {
            console.error('Login failed:', data);
            alert('Login failed. Please try again.');
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