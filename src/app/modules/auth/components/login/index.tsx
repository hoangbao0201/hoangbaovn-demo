"use client";

import Link from "next/link";
import Image from "next/image";

import { signIn, useSession } from "next-auth/react";

import ButtonAuth from "../button-auth";
import { ChangeEvent, useState } from "react";
import userService from "@/lib/services/user.service";

const Login = () => {
    // const { data: session, status } = useSession();
    // console.log({ session, status });

    const [dataLogin, setDataLogin] = useState({
        accout: "hoangbao020103@gmail.com",
        password: "baodeptrai199",
    });

    const eventChangeValueInput = (e: ChangeEvent<HTMLInputElement>) => {
        setDataLogin({
            ...dataLogin,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async () => {
        try {
            const { accout, password } = dataLogin;
            signIn("credentials", {
                redirect: false,
                email: accout,
                password: password
            });
        } catch (error) {}
    };

    const handleSigninGithub = async () => {
        signIn("github", { redirect: false });
    };

    return (
        <main className="my-4" style={{ minHeight: "calc(100vh - 174px)" }}>
            <div className="max-w-xl w-full mx-auto">
                <div className="bg-white rounded-md shadow-sm border px-5 py-5">
                    <div className="font-semibold text-center mb-3">
                        HOANGBAO
                    </div>
                    <div className="font-semibold text-center text-2xl mb-5">
                        Đăng nhập
                    </div>
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
                                type="password"
                                value={dataLogin.password}
                                onChange={eventChangeValueInput}
                                className="border h-11 py-2 px-4 rounded-md w-full transition-all focus:border-blue-600 focus:outline outline-blue-600"
                            />
                        </div>
                        <div
                            onClick={handleLogin}
                            className="mb-2 border bg-blue-600 hover:bg-blue-700 text-lg h-13 py-2 px-2 cursor-pointer text-center text-white rounded-md"
                        >
                            Đăng nhập
                        </div>

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
                            handle={handleSigninGithub}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;
