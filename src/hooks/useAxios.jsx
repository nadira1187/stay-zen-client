import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/provider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

const useAxios = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const interceptor = axiosSecure.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if (error.response.status === 401 || error.response.status === 403) {
                    // Handle unauthorized error here
                    logOut()
                        .then(() => {
                            navigate('/login');
                        })
                        .catch((logoutError) => {
                            console.log(logoutError);
                        });
                }
                return Promise.reject(error);
            }
        );

        // Clean up the interceptor when the component unmounts
        return () => {
            axiosSecure.interceptors.response.eject(interceptor);
        };
    }, [navigate, logOut]);

    return axiosSecure;
};

export default useAxios;
