import { useState } from "react";
import { Checkbox } from "../shared/Checkbox";
import { PipelineColumn } from "../shared/PipelineColumn";
import { Column, Label, filters } from "./models";
import { columns } from "./columns";


function SalesPipelines() {
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
              isChecked={selectedLabel === label}
              onChange={(isChecked) =>
                setSelectedLabel(isChecked ? label : "Basic")
              }
            />
          ))}
        </div>
      </fieldset>
      <div className="flex mt-16 grow gap-x-3">
        {columns.filter(filterColumnByLabel).map((column) => (
          <PipelineColumn key={column.title} {...column} />
        ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-white via-white via-50% to-transparent"></div>
    </main>
  );
}

export { SalesPipelines };
