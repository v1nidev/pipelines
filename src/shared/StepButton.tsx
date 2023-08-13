import { ReactNode } from "react";

interface StepButtonProps {
  children: ReactNode;
  number: number;
  isSelected?: boolean;
}

function StepButton({ number, children, isSelected = false }: StepButtonProps) {
  return (
    <button className="flex flex-col items-center">
      <div
        className={`
          flex items-center justify-center border border-slate-300 rounded-2xl w-12 h-12
          leading-none
          ${isSelected ? "text-white bg-blue-950" : "bg-white"}
        `}
      >
        {number}
      </div>
      <span className="text-2xs tracking-tight">{children}</span>
    </button>
  );
}

export { StepButton };
