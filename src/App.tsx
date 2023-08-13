import { useState } from "react";
import { Checkbox } from "./shared/Checkbox";

const filters = ["Basic", "Advanced", "Expert", "Custom"];

function App() {
  const [checkedFilter, setCheckedFilter] = useState("");

  return (
    <ul className="flex mt-11 gap-x-3 min-w-[45%]">
      {filters.map((filter) => (
        <li key={filter} className="grow shrink-0 basis-0">
          <Checkbox
            name={filter}
            label={filter}
            checked={checkedFilter === filter}
            onChange={(isChecked) => setCheckedFilter(isChecked ? filter : "")}
          />
        </li>
      ))}
    </ul>
  );
}

export default App;
