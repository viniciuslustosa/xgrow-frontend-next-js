import * as React from "react";
import styles from "./Button.module.css";
import Icon from "@/icons";
import { IconString } from "@/icons/types";

type variants = "primary" | "secondary";
type ButtonProps = {
  variant?: variants;
  icon?: IconString;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const VariantMap = {
  primary: styles.primary,
  secondary: styles.secondary,
};

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { variant = "primary", icon, ...otherProps } = props;
  
  const className = [styles.root, VariantMap[variant]];
  return (
    <button {...otherProps} className={className.join(" ")}>
      { icon && (<Icon name={icon}></Icon> )}
      <span>
        {props.children}
      </span>
    </button>
  );
};