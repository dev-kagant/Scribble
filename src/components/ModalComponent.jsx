import React from "react";
import { XCircleIcon } from "@heroicons/react/16/solid";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="flex flex-col justify-center items-center w-full h-full fixed inset-0 bg-black-shade">
      <div className="flex flex-col items-center max-h-4/5">
        <button
          onClick={onClose}
          className="text-white hover:text-teal-600 text-xl w-8 cursor-pointer"
          aria-label="Close modal"
        >
          <XCircleIcon/>
        </button>
        <div className="h-7/8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
