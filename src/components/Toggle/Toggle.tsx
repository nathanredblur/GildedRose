import styles from './Toggle.module.scss'

type ToggleProps = {
  onToggle: React.ChangeEventHandler<HTMLInputElement>;
  value?: boolean;
  label?: string;
  className?: string;
};

export const Toggle: React.FC<ToggleProps> = ({
  onToggle,
  value,
  label,
  className,
}) => (
  <label htmlFor="toggleButton" className={`flex items-center cursor-pointer ${className}`}>
    <div className="px-2">{label}</div>
    <div className="relative">
      <input id="toggleButton" type="checkbox" className="hidden" checked={value} onChange={onToggle} />
      <div className={`${styles.togglePath} bg-gray-200 w-9 h-5 rounded-full shadow-inner`} />
      <div className={`${styles.toggleCircle} absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0`} />
    </div>
  </label>
);
