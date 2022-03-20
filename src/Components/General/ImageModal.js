import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {XIcon} from "@heroicons/react/solid";

export default function ImageModal(props) {
    const [open, setOpen] = useState(true)

    const close = () => {
        props.setClosed(false);
        setOpen(false);
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={() => close()}>
                <div className="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle" aria-hidden="true">
          </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="relative inline-block align-bottom bg-zinc-700 rounded-lg px-4
                            pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all
                            sm:my-8 sm:align-middle sm:p-6 w-full lg:w-7/12">
                            <button
                                type="button"
                                className="inline-flex justify-center w-full rounded-md border border-transparent
                                        shadow-sm px-4 py-2 bg-sky-600 text-base font-medium text-white
                                        hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                                        focus:ring-sky-500 sm:text-sm w-12 float-right"
                                onClick={() => close()}
                            >
                                <XIcon/>
                            </button>
                            <div>
                                <div className="mt-3 text-center sm:mt-5">
                                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-white">
                                        {props.title}
                                    </Dialog.Title>
                                    <div className="mt-2 object-fill">
                                        <p className="text-sm text-gray-300 mb-2">
                                            {props.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="mx-auto flex items-center justify-center h-4/5 rounded-full">
                                    <img
                                        className="bg-gray-100 rounded-lg"
                                        src={props.imageSrc}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}