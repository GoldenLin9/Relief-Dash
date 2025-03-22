import { useAuth } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import axios from "axios";

let baseURL = 'http://localhost:8000/';

const useAxiosInterceptor = () => {
    const { accessToken, setAccessToken, setUser } = useAuth();

    const axiosInstance = axios.create({
        baseURL: baseURL,
        timeout: 5000,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });

    axiosInstance.interceptors.request.use(async req => {

        const token = localStorage.getItem('access_token');

        if (token) {

            // If the token is expired, try to refresh it
            const isExpired = dayjs().isAfter(dayjs.unix(jwtDecode(accessToken).exp))

            if (!isExpired) {
                return req;
            }

            // refresh token
            const response = await axios.post(`${baseURL}auth/jwt/refresh/`, {
                refresh: localStorage.getItem('refresh_token')
            });

            const { access } = response.data;
            localStorage.setItem('access_token', access);
            req.headers['Authorization'] = `Bearer ${access}`;

            let user = jwtDecode(access);
            localStorage.setItem('user', JSON.stringify(user));

            setAccessToken(access);
            setUser(user);
        }
        return req;
    })

    return axiosInstance;
    
};

export default useAxiosInterceptor;
