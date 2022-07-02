import React from "react";
import "./button.scss";
export default function Button({
  onClick,
  disabled,
  children,
  variant,
}: {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
  variant: string;
}) {
  let btnClass = variant;
  switch (variant) {
    case "primary":
      btnClass = "btn primary";

      break;
    case "secondary":
      btnClass = "btn secondary";

      break;

    default:
      break;
  }
  return (
    <button className={btnClass} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
