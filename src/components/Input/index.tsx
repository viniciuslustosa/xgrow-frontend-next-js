import * as React from "react";
import styles from "./Input.module.css";
import { IconString } from "@/icons/types";
import Icon from "@/icons";

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
  const className = [styles.root, VariantMap[variant]];
  return (
    <div className={className.join(" ")}>
        <label className={styles.label}>{ props.label }</label>
        <div>
          <input className={styles.input} {...otherProps}>
              {props.children}
          </input>
          { icon && (
            <Icon name={icon} color={"#93BC1E"} size={18}></Icon>
          )}
        </div>
    </div>
  );
};