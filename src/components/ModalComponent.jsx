import React from "react";
import { XCircleIcon } from "@heroicons/react/16/solid";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="flex flex-col justify-center items-center w-full h-full absolute inset-0 bg-black-shade" onClick={onClose}>
      <button
        onClick={onClose}
        className="text-white hover:text-teal-600 text-xl w-8 cursor-pointer"
        aria-label="Close modal"
      >
        <XCircleIcon/>
      </button>
      <div className="">
        {children}
      </div>
    </div>
  );
};

export default Modal;
