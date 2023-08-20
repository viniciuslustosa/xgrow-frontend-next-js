import * as React from "react";
import styles from "./Select.module.css";
import { IconString } from "@/icons/types";
import Icon from "@/icons";

type variants = "primary" | "secondary";
type options = { value: string, label: string };
type SelectProps = {
  variant?: variants;
  options: options[];
  label?: string;
  icon?: IconString;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const VariantMap = {
  primary: styles.primary,
  secondary: styles.secondary,
};

export const Select: React.FunctionComponent<SelectProps> = (props) => {
  const { variant = "primary", icon, options, ...otherProps } = props;
  const className = [styles.root, VariantMap[variant]];
  return (
    <div className={className.join(" ")}>
        <label className={styles.label}>{ props.label }</label>
        { icon && (
          <Icon name={icon} color={"#93BC1E"} size={18}></Icon>
        )}
        <select className={styles.input} {...otherProps}>
            { options && options.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
  );
};