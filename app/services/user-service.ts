import axios from "axios";
import { API_ENDPOINTS } from "../constants/api-endpoints";

namespace UserService{
    export const login = async (payload:object) => {
        const login = await axios.post(
            API_ENDPOINTS.LOGIN,
            payload
        )
        return login.data;
    }

    export const signup = async (payload:object) => {
        const signup = await axios.post(
            API_ENDPOINTS.SIGNUP,
            payload
        )
        return signup.data;
    }
}

export default UserService;