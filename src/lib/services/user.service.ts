import axios from "axios";
import { API_BASE_URL } from "../data";

class UserService {

    async loginUser(accout: string, password: string) : Promise<any> {
        try {
            // const user = await fetch(`${API_BASE_URL}/api/auth/login`, {
            //     method: "POST",
            //     body: JSON.stringify({ email: accout, password: password })
            // })
            const user = await axios.post(`${API_BASE_URL}/api/auth/login`, {
                email: accout,
                password: password
            });
            return user.data;
        } catch (error) {
            return {
                success: false,
                message: "error user successful",
                error: error
            };
        }
    }

    async myUser(token: string) : Promise<any> {
        try {
            const user = await axios.get(`${API_BASE_URL}/api/users/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            return user.data;
        } catch (error) {
            return {
                success: false,
                message: "error user successful",
                error: error
            };
        }
    }

    async test() : Promise<any> {
        try {
            return {
                success: true,
                message: "successful",
            };
        } catch (error) {
            return {
                success: false,
                message: "error users successful",
                error: error
            };
        }
    
    }

}

const userService = new UserService();

export default userService;