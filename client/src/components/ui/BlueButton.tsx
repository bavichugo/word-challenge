import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isFull?: boolean;
}

const BlueButton = ({ ...props }: ButtonProps) => {
  const { isFull } = props;

  return (
    <button
      {...props}
      className={`${isFull ? "bg-cblue1 hover:bg-cblue1/70" : "border-cblue1 hover:border-cblue1/70 border-2"} rounded-full py-2 px-4 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default BlueButton;
