import { Header } from "./pipelines/Header";
import { SalesPipelines } from "./pipelines/SalesPipelines";

function App() {
  return (
    <div className="flex flex-col px-3 h-screen bg-slate-100">
      <Header />
      <SalesPipelines />
    </div>
  );
}

export default App;
