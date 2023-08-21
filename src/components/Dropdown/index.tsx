import * as React from "react";
import styles from "./Input.module.css";
import { IconString } from "@/icons/types";
import Icon from "@/icons";
import { useState } from "react";

type variants = "primary" | "secondary";
type InputProps = {
  variant?: variants;
  label?: string;
  icon?: IconString;
} & React.InputHTMLAttributes<HTMLInputElement>;

const VariantMap = {
  primary: styles.primary,
  secondary: styles.secondary,
};

export const Input: React.FunctionComponent<InputProps> = (props) => {
  const { variant = "primary", icon, ...otherProps } = props;
  const [isOpen, setIsOpen] = useState(false);
  const options = ['Opção 1', 'Opção 2', 'Opção 3'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const className = [styles.root, VariantMap[variant]];
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={toggleDropdown}
        >
          Selecione uma opção
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};