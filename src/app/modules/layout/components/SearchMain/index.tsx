"use client";

import Modal from "@/app/modules/common/components/modal";
import { IconSearch } from "@/app/modules/common/icons";
import { useState } from "react";

const SearchMain = () => {
    const [isModalSearch, setIsModalSearch] = useState(false);

    return (
        <>
            <div
                onClick={() => setIsModalSearch(true)}
                className="hidden md:block px-4 py-2 text-base bg-gray-50 text-gray-600 border hover:border-blue-400 rounded-md cursor-text select-none w-full max-w-sm"
            >
                Tìm kiếm...
            </div>
            <i onClick={() => setIsModalSearch(true)} className="block cursor-pointer md:hidden p-2 bg-gray-100 rounded-full outline-blue-600 outline-2 hover:outline-dashed">
                <IconSearch size={20} />
            </i>
            <Modal isOpen={isModalSearch} setIsOpen={setIsModalSearch}>
                <div className="w-full bg-white px-4">xin chào các bạn</div>
            </Modal>
        </>
    );
};

export default SearchMain;
