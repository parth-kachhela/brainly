import { ReactElement } from "react";

interface buttonProps {
  variant: "primary" | "secondrey";
  size: "sm" | "lg" | "md";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const variantstyle = {
  primary: "bg-indigo-700 text-white",
  secondrey: "bg-indigo-400 text-indigo-700",
};

const sizeStyle = {
  sm: "w-28 h-8 p-1",
  md: "w-35 h-9 p-1.5",
  lg: "w-40 h-10 p-2",
};

const defaultStyle = "rounded-md flex justify-between items-center";

export const Button = (props: buttonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${variantstyle[props.variant]} ${
        sizeStyle[props.size]
      } ${defaultStyle} cursor-pointer`}
    >
      <div>{props.startIcon}</div>
      <div>{props.text}</div>
      <div>{props.endIcon}</div>
    </button>
  );
};
