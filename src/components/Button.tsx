export const Button: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  className,
  ...props
}) => (
  <a
    className={`text-white px-4 py-2 bg-red-500 rounded hover:bg-red-700 ${className}`}
    {...props}
  >
    {children}
  </a>
)