import { ReactNode } from "react";
import { IconCrawn } from "../icons";


interface AvatarRankProps {
    children: ReactNode
    rank?: number | null
}
const AvatarRank = ({ children, rank = null } : AvatarRankProps) => {

    return (
        <div className="relative">
            {
                rank && (
                    <IconCrawn
                        size={18}
                        className="absolute top-0 right-0 translate-x-[7px] -translate-y-[7px] rotate-45"
                    />
                )
            }
            {/* <span className="flex-shrink-0 rounded-full overflow-hidden block outline outline-2 outline-orange-400"> */}
            {/* </span> */}
            <div className="p-1 rounded-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-yellow-500 to-yellow-500">
                {children}
            </div>
        </div>
    )
}

export default AvatarRank;