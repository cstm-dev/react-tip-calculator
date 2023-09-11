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
      <Satisfaction>How did you like the service?</Satisfaction>
      <Satisfaction>How did your friend like the service?</Satisfaction>
      <Output bill={bill} />
    </>
  );
}

export default App;
