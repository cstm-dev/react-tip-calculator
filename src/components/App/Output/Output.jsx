import Reset from "./Reset/Reset.jsx";
import PropTypes from "prop-types";

function Output({ bill, tip, onResetCalc }) {
  Output.propTypes = {
    bill: PropTypes.number,
    tip: PropTypes.array,
    onResetCalc: PropTypes.func,
  };

  const commonTip = tip.reduce((curr, acc) => curr.tip + acc.tip) / 2;
  const commonExtra = (bill * commonTip) / 100;

  return (
    <div>
      <h1>{`You pay $${
        bill + commonExtra
      } ($${bill} + $${commonExtra} tip)`}</h1>
      <Reset onResetCalc={onResetCalc} />
    </div>
  );
}

export default Output;
