import React from "react";
import "./button.scss";
export default function Button({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
