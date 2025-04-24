import { ReactElement } from "react";

interface buttonProps {
  variant: "primary" | "secondrey";
  size: "sm" | "lg" | "md";
  text: string;
  startIcon: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const variantstyle = {
  primary: "bg-indigo-700 text-white",
  secondrey: "bg-indigo-400 text-indigo-700",
};

const sizeStyle = {
  sm: "w-28 h-8 p-1",
  md: "w-29 h-9 p-1.5",
  lg: "w-30 h-10 p-2",
};

const defaultStyle = "rounded-md flex justify-evenly";

export const Button = (props: buttonProps) => {
  return (
    <button
      className={`${variantstyle[props.variant]} ${
        sizeStyle[props.size]
      } ${defaultStyle}`}
    >
      <div>{props.startIcon}</div>
      <div>{props.text}</div>
      <div>{props.endIcon}</div>
    </button>
  );
};
