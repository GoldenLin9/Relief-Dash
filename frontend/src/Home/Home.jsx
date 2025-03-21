import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();

        let bodyContent = {
            "refresh": localStorage.getItem('refresh_token')
        }

        const response = await fetch('http://localhost:8000/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyContent)
        });

        if (response.ok) {
            console.log('Logout successful');
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            
            // Redirect to register page after successful logout
            navigate('/register');
            
        } else {
            console.error('Logout failed');
            alert('Logout failed. Please try again.');
        }
    }

    return (
        <div>
            <h1>Relief Dash Home Page</h1>

            <p>Register Here: <Link to="/register">Register</Link></p>
            <p>Login Here: <Link to="/login">Login</Link></p>
            
            <button onClick = {handleLogout}>Logout</button>

        </div>
    )
}

export default Home;