import axios from "axios";
import { API_ENDPOINTS } from "../constants/api-endpoints";

export const UserService = {
    async login(payload:object) {
        const login = await axios.post(
            API_ENDPOINTS.LOGIN,
            payload
        )
        return login.data;
    },

    async signup(payload:object) {
        const signup = await axios.post(
            API_ENDPOINTS.SIGNUP,
            payload
        )
        return signup.data;
    }
}