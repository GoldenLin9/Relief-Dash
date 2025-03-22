import { Link, useNavigate } from 'react-router-dom';
import useAxiosInterceptor from '../hooks/useAxiosInterceptor';

const Home = () => {

    const axios = useAxiosInterceptor();
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        
        const response = await axios.post("/logout/", {
            "refresh": localStorage.getItem('refresh_token')
        });

        if (response.status === 205) {
            console.log('Logout successful:', response.data);
        }
        // Clear local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');


        navigate('/login');
    }

    const handleRetrieveUser = async (e) => {
        e.preventDefault();

        const response = await axios.get("/auth/users/me/");
        let data = response.data;
        console.log(data);
    }

    return (
        <div>
            <h1>Relief Dash Home Page</h1>

            <p>Register Here: <Link to="/register">Register</Link></p>
            <p>Login Here: <Link to="/login">Login</Link></p>
            
            <button onClick = {handleLogout}>Logout</button>

            <button onClick = {handleRetrieveUser}>Retrive User Info</button>

        </div>
    )
}

export default Home;