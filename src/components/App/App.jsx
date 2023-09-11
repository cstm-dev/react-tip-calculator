import Bill from "./Bill/Bill.jsx";
import Satisfaction from "./Satisfaction/Satisfaction.jsx";
import Output from "./Output/Output.jsx";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);

  function handleSetBill(currBill) {
    setBill(currBill);
  }

  return (
    <>
      <Bill bill={bill} onSetBill={handleSetBill} />
      <Satisfaction />
      <Satisfaction />
      <Output />
    </>
  );
}

export default App;
