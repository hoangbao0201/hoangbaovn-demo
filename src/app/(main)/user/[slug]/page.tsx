import { Metadata } from "next";
import { notFound } from "next/navigation";
import UserDetailTemplate from "@/app/modules/user/templates/user-template";
import userService, { GetUserDetailProps } from "@/lib/services/user.service";

type Props = {
    params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { success, user }: { success: boolean; user: GetUserDetailProps } =
        await userService.userDetail(params.slug);

    if (!success) {
        notFound();
    }

    return {
        title: `${user.name} - HOANGBAO`,
        description: user.description || "",
    };
}

const UserDetailPage = async ({ params }: Props) => {
    const { success, user }: { success: boolean; user: GetUserDetailProps } =
        await userService.userDetail(params.slug);

    return <UserDetailTemplate slug={params.slug} user={user} />;
};

export default UserDetailPage;
