import { ReactElement } from "react";

interface buttonProps {
  variant: "primary" | "secondrey";
  size: "sm" | "lg" | "md";
  text: string;
  startIcon: ReactElement;
  endIcon: ReactElement;
  onClick: () => void;
}

const variantstyle = {
  primary: "bg-indigo-700 text-white",
  secondrey: "bg-indigo-400 text-indigo-700",
};

const sizeStyle = {
  sm: "py-1 px-2",
  md: "py-1 px-2",
  lg: "py-1 px-2",
};

export const Button = (props: buttonProps) => {
  return (
    <button
      className={`${variantstyle[props.variant]} ${sizeStyle[props.size]}`}
    >
      {props.startIcon}
      {props.text}
      {props.endIcon}
    </button>
  );
};
