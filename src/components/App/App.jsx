import Bill from "./Bill/Bill.jsx";
import Satisfaction from "./Satisfaction/Satisfaction.jsx";
import Output from "./Output/Output.jsx";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState([
    { id: 1, tip: 0 },
    { id: 2, tip: 0 },
  ]);

  function handleSetBill(currBill) {
    setBill(currBill);
  }

  function handleSetTip(tip, id) {
    setTip((currTip) =>
      currTip.map((e) => (e.id === id ? { ...e, tip: tip } : e))
    );
  }

  return (
    <>
      <Bill bill={bill} onSetBill={handleSetBill} />
      <Satisfaction onSetTip={handleSetTip} id="1">
        How did you like the service?
      </Satisfaction>
      <Satisfaction onSetTip={handleSetTip} id="2">
        How did your friend like the service?
      </Satisfaction>
      <Output bill={bill} tip={tip} />
    </>
  );
}

export default App;
