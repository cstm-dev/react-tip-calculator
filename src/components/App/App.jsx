import Bill from "./Bill/Bill.jsx";
import Satisfaction from "./Satisfaction/Satisfaction.jsx";
import Output from "./Output/Output.jsx";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState([
    { id: 0, tip: 0 },
    { id: 1, tip: 0 },
  ]);

  function handleSetBill(currBill) {
    setBill(currBill);
  }

  function handleSetTipById(tip, id) {
    setTip((currTip) =>
      currTip.map((e) => (e.id === id ? { ...e, tip: tip } : e))
    );
  }

  function handleResetCalc() {
    setBill(0);
    setTip([
      { id: 0, tip: 0 },
      { id: 1, tip: 0 },
    ]);
  }

  return (
    <>
      <Bill bill={bill} onSetBill={handleSetBill} />
      {[...Array(2).keys()].map((e) => (
        <Satisfaction key={e} tip={tip} onSetTipById={handleSetTipById} id={e}>
          How did you like the service?
        </Satisfaction>
      ))}
      {bill > 0 && (
        <Output bill={bill} tip={tip} onResetCalc={handleResetCalc} />
      )}
    </>
  );
}

export default App;
