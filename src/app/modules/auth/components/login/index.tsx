"use client"

import userService from "@/lib/services/user.service";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import ButtonAuth from "../button-auth";

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
        <main className="my-4" style={{ minHeight: "calc(100vh - 174px)" }}>
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
                                className="border h-11 py-2 px-4 rounded-md w-full transition-all focus:border-blue-600 focus:outline outline-blue-600"
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
                                className="border h-11 py-2 px-4 rounded-md w-full transition-all focus:border-blue-600 focus:outline outline-blue-600"
                            />
                        </div>
                        <div onClick={handleLogin} className="mb-2 border bg-blue-600 hover:bg-blue-700 text-lg h-13 py-2 px-2 cursor-pointer text-center text-white rounded-md">
                            Đăng nhập
                        </div>
                        {/* <div onClick={handleLogin} className="mb-2 relative flex items-center justify-center border text-black bg-white hover:bg-gray-100 text-lg h-13 py-2 px-2 cursor-pointer text-center rounded-md">
                            <Image
                                width={15}
                                height={15}
                                alt="icon google"
                                className="w-7 h-7 block my-[5px] ml-3 border-r pr-2 left-0 absolute"
                                src={`/images/social/google.svg`}
                            />
                            Đăng nhập với Google
                        </div>
                        <div onClick={handleLogin} className="text-white fill-white mb-2 relative flex items-center justify-center border bg-gray-900 hover:bg-gray-950 text-lg h-13 py-2 px-2 cursor-pointer text-center rounded-md">
                            <Image
                                width={15}
                                height={15}
                                alt="icon github"
                                className="w-7 h-7 block my-[5px] ml-3 border-r pr-2 left-0 absolute"
                                src={`/images/social/github.svg`}
                            />
                            Đăng nhập với Github
                        </div> */}
                        <ButtonAuth
                            color="black"
                            content="Google"
                            linkIcon="/images/social/google.svg"
                            handle={() => {}}
                        />
                        <ButtonAuth
                            color="white"
                            content="Github"
                            linkIcon="/images/social/github.svg"
                            handle={() => {}}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login;