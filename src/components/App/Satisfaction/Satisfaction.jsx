import PropTypes from "prop-types";

function Satisfaction({ children }) {
  Satisfaction.propTypes = {
    children: PropTypes.string,
  };

  return (
    <div>
      <label htmlFor="tipPercentage">{children} </label>
      <select name="tipPercentage" value="0" onChange={(e) => e}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

export default Satisfaction;
