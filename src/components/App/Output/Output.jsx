import Reset from "./Reset/Reset.jsx";
import PropTypes from "prop-types";

function Output({ bill }) {
  Output.propTypes = {
    bill: PropTypes.number,
  };

  return (
    <div>
      <h1>{`You pay $${bill} ($80 + $12 tip)`}</h1>
      <Reset />
    </div>
  );
}

export default Output;
