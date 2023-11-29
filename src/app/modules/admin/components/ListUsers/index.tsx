"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import adminService, { GetUsersProps } from "@/lib/services/admin.service";
import convertTime from "@/app/modules/util/convertTime";

interface ListUserProps {}

const ListUser = ({}: ListUserProps) => {
    const { data: session, status } = useSession();
    const [listUser, setListUser] = useState<GetUsersProps[]>([]);
    // const dataUsers: { success: boolean; users: GetUsersByAdminProps[] } =

    const handleGetUsers = async () => {
        try {
            const dataRes = await adminService.getAllUser(
                session?.backendTokens.accessToken as string
            );

            if (dataRes.success) {
                setListUser(dataRes.users);
            }
        } catch (error) {}
    };

    useEffect(() => {
        if (status === "authenticated") {
            handleGetUsers();
        }
    }, [status]);

    return (
        <div className="relative w-full overflow-hidden">
            <table className="table-auto">
                <thead className="border rounded-t-md overflow-hidden bg-gray-100">
                    <tr className="text-left [&>th]:px-3 [&>th]:py-2 [&>th]:border-x [&>th]:border-b">
                        <th className="w-1/12">UserId</th>
                        <th className="w-1/12">Name</th>
                        <th className="w-1/12">Username</th>
                        <th className="w-6/12">Password</th>
                        <th className="w-1/12">Rank</th>
                        <th className="w-1/12">Candy</th>
                        <th className="w-1/12">CreateAt</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser &&
                        listUser.map((user, index) => {
                            return (
                                <tr
                                    key={user.userId}
                                    className="[&>td]:px-3 [&>td]:py-2 [&>td]:border-x [&>td]:border-b [&>td>div]:line-clamp-1"
                                >
                                    <td className="w-1/12 line-clamp-1">
                                        <div>{user.userId}</div>
                                    </td>
                                    <td className="w-1/12 line-clamp-1">
                                        <div>{user.name}</div>
                                    </td>
                                    <td className="w-1/12 line-clamp-1">
                                        <div>{user.username}</div>
                                    </td>
                                    <td className="w-6/12 line-clamp-1">
                                        <div>{user.password}</div>
                                    </td>
                                    <td className="w-1/12 line-clamp-1">
                                        <div>{user.rank}</div>
                                    </td>
                                    <td className="w-1/12 line-clamp-1">
                                        <div>{user.candy}</div>
                                    </td>
                                    <td className="w-1/12 line-clamp-1">
                                        <div>
                                            {convertTime(user.createdAt)}
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default ListUser;
