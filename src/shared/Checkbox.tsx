import { InputHTMLAttributes } from "react";
import { TRANSACTION_CLASSES } from "./global-stiles";

interface CheckboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "onChange" | "name"
  > {
  label: string;
  name: string;
  isChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
}

const ARROW_CLASSES = `
  after:ml-0.5 after:text-red-500 after:h-3 after:w-3 after:bg-white
  after:border-r-2 after:border-b-2 after:border-blue-700 after:rounded-br
  after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:-translate-y-[calc(50%-1.2px)]
  after:rotate-45 hover:after:bg-slate-100
  after:transition-colors after:ease-in-out after:duration-300
`;

function Checkbox({
  label,
  className,
  checked: isChecked = false,
  onChange = () => null,
  ...rest
}: CheckboxProps) {
  const id = rest.id || rest.name;

  return (
    <div className={className}>
      <input
        id={id}
        className="peer hidden"
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
        {...rest}
      />
      <label
        htmlFor={id}
        className={`
          relative flex p-3 items-center text-sm
          rounded-lg cursor-pointer bg-white hover:bg-slate-100
          outline outline-1 outline-slate-200
          peer-checked:outline peer-checked:outline-2 peer-checked:outline-blue-700
          ${isChecked ? ARROW_CLASSES : ""}
          ${TRANSACTION_CLASSES}
          ${className || ""}
        `}
      >
        <div
          className={`
            mr-3.5 relative border-2 w-4 h-4 rounded
            ${
              isChecked
                ? "border-blue-700 bg-blue-700"
                : "border-slate-300 bg-white hover:bg-slate-200"
            }
            ${TRANSACTION_CLASSES}
          `}
        >
          <svg
            className={`
              absolute pointer-events-none peer-checked:block stroke-white
              ${isChecked ? "block" : "hidden"}
            `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <span className="text-sm">{label}</span>
      </label>
    </div>
  );
}

export { Checkbox };
