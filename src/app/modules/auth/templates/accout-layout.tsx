"use client"

import { ReactNode } from "react"
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

interface AccoutLayoutProps {
    children: ReactNode
}
const AccoutLayout = ({ children } : AccoutLayoutProps) => {
    const { data: session, status } = useSession();

    if (status == "authenticated") {
        redirect('/');
    }
    
    return (
        <>{children}</>
    )
}

export default AccoutLayout;