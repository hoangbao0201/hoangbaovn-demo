import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Dispatch, Fragment, ReactNode, SetStateAction } from "react";

interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    size?: "small" | "medium" | "large";
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const Modal = ({
    children,
    isOpen,
    setIsOpen,
    size = "medium",
}: ModalProps) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40" onClose={setIsOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/20" />
                </Transition.Child>

                <div className="fixed inset-0">
                    <div className="flex min-h-full justify-center p-4 text- mt-20">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className={clsx(
                                    "flex flex-col justify-start w-full h-full transform overflow-auto bg-white rounded-lg p-10 text-left align-middle shadow-xl transition-all max-h-[65vh]",
                                    {
                                        "max-w-md": size === "small",
                                        "max-w-xl": size === "medium",
                                        "max-w-3xl": size === "large",
                                    }
                                )}
                            >
                                {/* <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Payment successful
                                </Dialog.Title> */}
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Modal;
