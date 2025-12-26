import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  bold?: boolean;
  disabled?: boolean;
};

export default function Button({children, onClick, bold = false, disabled = false}: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}  className={`
    cursor-pointer
    inline-flex items-center justify-center
    rounded-md px-2 py-2  text-sm ${bold ? "font-bold" : "font-medium"}
    bg-background text-foreground
    hover:bg-hover
    focus:outline-none
    disabled:opacity-50 disabled:cursor-not-allowed
    transition-colors duration-150`}
  >
      {children}
    </button>
  );
}
