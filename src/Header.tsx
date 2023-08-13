import { StepButton } from "./shared/StepButton";
import { TRANSACTION_CLASSES } from "./shared/global-stiles";

function Header() {
  return (
    <header className="flex py-7 px-6 justify-between">
      <div className=""></div>
      <div className="flex gap-4">
        <StepButton isSelected={true} number={1}>
          Sales Pipeline Settings
        </StepButton>
        <StepButton number={2}>Opportunity Details Settings</StepButton>
      </div>
      <div>
        <button
          className={`px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl text-sm font-medium ${TRANSACTION_CLASSES}`}
        >
          Next
        </button>
      </div>
    </header>
  );
}

export { Header };
