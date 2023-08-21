import * as React from "react";
import { IconString } from "@/icons/types";
import Icon from "@/icons";
import { useState } from "react";

type variants = "primary" | "secondary";
type InputProps = {
  variant?: variants;
  label?: string;
  icon?: IconString;
  isOpen: boolean; 
} & React.InputHTMLAttributes<HTMLInputElement>;


export const Dropdown: React.FunctionComponent<InputProps> = (props) => {
  const { variant = "primary", icon, isOpen, ...otherProps } = props;
  const options = ['Opção 1', 'Opção 2', 'Opção 3'];

  return (
    <div className="relative inline-block text-left mt-5">
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-black-100 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {props.children}
          </div>
        </div>
      )}
    </div>
  );
};