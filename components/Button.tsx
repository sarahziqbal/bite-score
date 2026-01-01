import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  bold?: boolean;
  disabled?: boolean;
  active?: boolean;
};

export default function Button({children, onClick, bold = false, disabled = false, active = false}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center
        rounded-md px-3 py-2 text-sm
        cursor-pointer
        ${bold ? "font-bold" : "font-medium"}
        ${active ? "bg-[var(--foreground)] text-[var(--background)]" : "bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--hover)]" }
        disabled:opacity-50
        transition-colors
      `}
    >
      {children}
    </button>
  );
}
