"use client"

import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const UserDropdown = () => {
    return (
        <>
            <Menu
                as="div"
                className="relative align-middle"
            >
                <Menu.Button className="block">
                    <Image
                        alt="ảnh người dùng"
                        src={"/images/avatar_user.jpg"}
                        width={40}
                        height={40}
                        title="hoangbao"
                        className="w-10 h-10 rounded-full overflow-hidden block object-cover hover:outline-dashed outline-2 outline-blue-600"
                    />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href={`/`}
                                        className={`${
                                            active
                                                ? "bg-gray-100"
                                                : "text-gray-900"
                                        } group flex w-full items-center rounded-sm px-2 py-2 text-sm`}
                                    >
                                        Trang chủ
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href={`/bai-viet`}
                                        className={`${
                                            active
                                                ? "bg-gray-100"
                                                : "text-gray-900"
                                        } group flex w-full items-center rounded-sm px-2 py-2 text-sm`}
                                    >
                                        Bài viết
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href={`/`}
                                        className={`${
                                            active
                                                ? "bg-gray-100"
                                                : "text-gray-900"
                                        } group flex w-full items-center rounded-sm px-2 py-2 text-sm`}
                                    >
                                        Giới thiệu
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
};

export default UserDropdown;
