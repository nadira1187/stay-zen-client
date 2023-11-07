import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";


const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;