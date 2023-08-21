import * as React from "react";
import styles from "./Paginator.module.css";
import { Button } from "../Button";

type variants = "primary" | "secondary";
type InputProps = {
  variant?: variants;
  pages: number;
  selectedPage: number;
  setPage: (page: number) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const VariantMap = {
  primary: styles.primary,
  secondary: styles.secondary,
};

export const Paginator: React.FunctionComponent<InputProps> = (props) => {
  const { variant = "primary", pages, setPage, selectedPage, ...otherProps } = props;
  const className = [styles.root, VariantMap[variant]];
  
  function generateNumberArray() {
    const numberArray = [];
  
    for (let i = 1; i <= pages; i++) {
      numberArray.push(i);
    }
  
    return numberArray;
  }

  return (
    <div className={className.join(" ")}>
        <Button variant="secondary">
          -
        </Button>
        { generateNumberArray().map(number => (
            <Button
              disabled={selectedPage == number}
              onClick={() => setPage(number)}
              key={number}
              variant={selectedPage == number ? 'primary' : 'secondary'}>
              { number }
            </Button>
        ))}
        <Button variant="secondary">
          -
        </Button>
    </div>
  );
};