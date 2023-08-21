import * as React from "react";
import styles from "./Button.module.css";
import Icon from "@/icons";
import { IconString } from "@/icons/types";

type variants = "primary" | "secondary" | "error" | "icon" | "dropdown";
type ButtonProps = {
  variant?: variants;
  icon?: IconString;
  iconColor?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const VariantMap = {
  primary: styles.primary,
  secondary: styles.secondary,
  error: styles.error,
  icon: styles.icon,
  dropdown: styles.dropdown,
};

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { variant = "primary", icon, iconColor, ...otherProps } = props;
  
  const className = [styles.root, VariantMap[variant]];
  return (
    <button {...otherProps} className={className.join(" ")}>
      { icon && (<Icon name={icon} color={iconColor} size={20}></Icon> )}
      <span>
        {props.children}
      </span>
    </button>
  );
};