"use client"

import userService from "@/lib/services/user.service";
import { ChangeEvent, useState } from "react";

const Login = () => {

    const [dataLogin, setDataLogin] = useState({
        accout: "hoangbao020103@gmail.com",
        password: "baodeptrai199",
    });

    const eventChangeValueInput = (e: ChangeEvent<HTMLInputElement>) => {
        setDataLogin({
            ...dataLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async () => {
        try {
            const { accout, password } = dataLogin;
            const userLoginResponse = await userService.loginUser(accout, password);
            if(userLoginResponse.success) {
                const checkUser = await userService.myUser(userLoginResponse.accessToken);
                console.log(checkUser);
            }
        } catch (error) {
            
        }
    }
    

    return (
        <main className="my-4">
            <div className="max-w-xl w-full mx-auto">
                <div className="bg-white rounded-md shadow-sm border px-5 py-5">
                    <div className="font-semibold text-center mb-3">HOANGBAO</div>
                    <div className="font-semibold text-center text-2xl mb-5">Đăng nhập</div>
                    <div>
                        <div className="mb-3 relative">
                            <label
                                htmlFor="idInputAccout"
                                className="select-none cursor-pointer mb-1"
                            >
                                Tài khoản
                            </label>
                            <input
                                id="idInputAccout"
                                name="accout"
                                value={dataLogin.accout}
                                onChange={eventChangeValueInput}
                                className="border h-11 py-2 px-5 rounded-md w-full transition-all focus:border-blue-600 focus:outline outline-blue-600"
                            />
                        </div>
                        <div className="mb-6 relative">
                            <label
                                htmlFor="idInputPassword"
                                className="select-none cursor-pointer mb-1"
                            >
                                Mật khẩu
                            </label>
                            <input
                                id="idInputPassword"
                                name="password"
                                value={dataLogin.password}
                                onChange={eventChangeValueInput}
                                className="border h-11 py-2 px-5 rounded-md w-full transition-all focus:border-blue-600 focus:outline outline-blue-600"
                            />
                        </div>
                        <div onClick={handleLogin} className="bg-blue-600 hover:bg-blue-700 text-lg h-11 py-2 px-2 cursor-pointer text-center text-white rounded-md">
                            Đăng nhập
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login;