import Icon from "@/icons";
import Link from "next/link";
import * as React from "react";

type ModalProps = {
    title: string,
} & React.HTMLAttributes<HTMLElement>;

export const Modal: React.FunctionComponent<ModalProps> = (props) => {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      id="error-modal"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom divide-y divide-gray-700 bg-black-80 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center flex justify-between w-full sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                className="text-lg leading-6 font-medium text-white"
                id="modal-title"
              >
                { props.title }
              </h3>
              <div>
                <Link
                    href="?"
                    type="button"
                >
                    <Icon name="Close" color="#93BC1E"></Icon>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-5 flex-col pt-5">
            { props.children }
          </div>
        </div>
      </div>
    </div>
  );
}
