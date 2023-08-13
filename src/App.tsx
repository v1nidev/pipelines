import { useState } from "react";
import { Checkbox } from "./shared/Checkbox";
import { Column } from "./Column";

const filters = ["Basic", "Advanced", "Expert", "Custom"] as const;

type Label = (typeof filters)[number];

type Column = {
  title: string;
  color: string;
  label: Label;
};

const columns: Column[] = [
  {
    title: "Lead",
    color: "purple",
    label: "Expert",
  },
  {
    title: "RFP in progress",
    color: "orange",
    label: "Advanced",
  },
  {
    title: "Submitted",
    color: "blue",
    label: "Basic",
  },
  {
    title: "Won",
    color: "cyan",
    label: "Basic",
  },
  {
    title: "Lost",
    color: "pink",
    label: "Custom",
  },
  {
    title: "Closed",
    color: "gray",
    label: "Basic",
  },
];

function App() {
  const [selectedLabel, setSelectedLabel] = useState<Label>("Basic");
  const selectedLabelFilterIndex = filters.findIndex(
    (filter) => filter === selectedLabel
  );

  function filterColumnByLabel(column: Column) {
    if (!selectedLabel) return true;

    const columnLabelIndex = filters.findIndex(
      (filter) => filter === column.label
    );

    return columnLabelIndex >= selectedLabelFilterIndex;
  }

  return (
    <div className="flex flex-col px-3 h-screen bg-slate-100">
      <main className="flex pt-11 flex-col grow items-center rounded-t-3xl bg-white">
        <fieldset className="flex flex-col items-center w-full">
          <legend className="text-2xl font-semibold text-center">
            Please select the type of sales pipeline that best fits to your
            company
          </legend>
          <div className="flex mt-11 gap-x-3 min-w-[45%]">
            {filters.map((label) => (
              <Checkbox
                key={label}
                className="grow shrink-0 basis-0"
                name={label}
                label={label}
                checked={selectedLabel === label}
                onChange={(isChecked) =>
                  setSelectedLabel(isChecked ? label : "Basic")
                }
              />
            ))}
          </div>
        </fieldset>
        <div className="flex mt-16 grow gap-x-3">
          {columns.filter(filterColumnByLabel).map((column) => (
            <Column key={column.title} {...column} />
          ))}
        </div>
        <div className="fixed bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-white via-white via-50% to-transparent"></div>
      </main>
    </div>
  );
}

export default App;
