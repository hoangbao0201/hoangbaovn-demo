import AccoutLayout from "@/app/modules/auth/templates/accout-layout";
import LoginTemplate from "@/app/modules/auth/templates/login-template";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function HomePage() {

    return (
        <AccoutLayout><LoginTemplate /></AccoutLayout>
    );
}
