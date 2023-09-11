import PropTypes from "prop-types";

function Reset({ onResetCalc }) {
  Reset.propTypes = {
    onResetCalc: PropTypes.func,
  };

  return (
    <div>
      <button onClick={onResetCalc}>Reset</button>
    </div>
  );
}

export default Reset;
