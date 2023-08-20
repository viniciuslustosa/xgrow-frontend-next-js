import * as React from "react";
import styles from "./Upload.module.css";
import { IconString } from "@/icons/types";
import Icon from "@/icons";
import Image from "next/image";
import { Button } from "../Button";
import { useRef, useState } from "react";

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

export const Upload: React.FunctionComponent<InputProps> = (props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleFileSelect = () => {
    if(fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.files) {
      const selectedFile = event.target.files[0];
      setSelectedFile(selectedFile);
    }
  };

  const { variant = "primary", icon, ...otherProps } = props;
  const className = [styles.root, VariantMap[variant]];
  return (
    <div className={className.join(" ")}>
        <label htmlFor="arquivo" className={styles.label}>{ props.label }</label>
        <div className="text-center mx-auto">
            <Image
              width={100}
              height={100}
              src="/images/upload.svg"
              alt="Preview" 
              className="my-2" />
        </div>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          className="hidden"
          {...otherProps} />
        <Button icon="FileUpload" variant="secondary" onClick={handleFileSelect}>
          Upload
        </Button>
    </div>
  );
};