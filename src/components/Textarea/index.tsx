import * as React from "react";
import styles from "./Textarea.module.css";
import { IconString } from "@/icons/types";
import Icon from "@/icons";

type variants = "primary" | "secondary";
type TextareaProps = {
  variant?: variants;
  label?: string;
  icon?: IconString;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const VariantMap = {
  primary: styles.primary,
  secondary: styles.secondary,
};

export const Textarea: React.FunctionComponent<TextareaProps> = (props) => {
  const { variant = "primary", icon, ...otherProps } = props;
  const className = [styles.root, VariantMap[variant]];
  return (
    <div className={className.join(" ")}>
        <label className={styles.label}>{ props.label }</label>
        <div className="flex items-center">
          <textarea className={styles.input} {...otherProps}>
              {props.children}
          </textarea>
          { icon && (
            <Icon name={icon} color={"#93BC1E"} size={18}></Icon>
          )}
        </div>
    </div>
  );
};