import React, { forwardRef } from "react";

export const Button = forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(({
  children,
  className,
  ...props
}, ref) => (
  <a
    className={`text-white px-4 py-2 bg-red-500 rounded hover:bg-red-700 ${className}`}
    ref={ref}
    {...props}
  >
    {children}
  </a>
));

Button.displayName = "Button";