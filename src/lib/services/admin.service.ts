import axios from "axios";
import { API_BASE_URL } from "../data";

export interface GetUsersProps {
    userId: number,
    name: string,
    username: string,
    email: string,
    password: string,
    description: string | null,
    rank: number,
    candy: number,
    createdAt: Date
}

class AdminService {

    async getAllUser(token: string) : Promise<any> {
        try {
            const users = await axios.get(`${API_BASE_URL}/api/admin/users`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            return users.data;
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

const adminService = new AdminService();

export default adminService;