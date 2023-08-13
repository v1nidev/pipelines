import { useState } from "react";
import { Checkbox } from "./shared/Checkbox";
import { Column } from "./Column";

const filters = ["Basic", "Advanced", "Expert", "Custom"];
const columns = [
  {
    title: "Lead",
    color: "purple",
  },
  {
    title: "RFP in progress",
    color: "orange",
  },
  {
    title: "Submitted",
    color: "blue",
  },
  {
    title: "Won",
    color: "cyan",
  },
  {
    title: "Lost",
    color: "pink",
  },
  {
    title: "Closed",
    color: "gray",
  },
];

function App() {
  const [checkedFilter, setCheckedFilter] = useState("");

  return (
    <div className="flex flex-col px-3 h-screen bg-slate-100">
      <main className="flex pt-11 flex-col grow items-center rounded-t-3xl bg-white">
        <fieldset className="flex flex-col items-center w-full">
          <legend className="text-2xl font-semibold text-center">
            Please select the type of sales pipeline that best fits to your
            company
          </legend>
          <div className="flex mt-11 gap-x-3 min-w-[45%]">
            {filters.map((filter) => (
              <Checkbox
                key={filter}
                className="grow shrink-0 basis-0"
                name={filter}
                label={filter}
                checked={checkedFilter === filter}
                onChange={(isChecked) =>
                  setCheckedFilter(isChecked ? filter : "")
                }
              />
            ))}
          </div>
        </fieldset>
        <div className="flex mt-16 grow gap-x-3">
          {columns.map((column) => (
            <Column key={column.title} {...column} />
          ))}
        </div>
        <div className="fixed bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-white via-white via-50% to-transparent"></div>
      </main>
    </div>
  );
}

export default App;
