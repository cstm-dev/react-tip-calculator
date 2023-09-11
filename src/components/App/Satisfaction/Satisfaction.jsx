import PropTypes from "prop-types";

function Satisfaction({ children, onSetTipById, id }) {
  Satisfaction.propTypes = {
    children: PropTypes.string,
    onSetTipById: PropTypes.func,
    id: PropTypes.number,
  };

  return (
    <div>
      <label htmlFor="tipPercentage">{children} </label>
      <select
        name="tipPercentage"
        onChange={(e) => onSetTipById(Number(e.target.value), Number(id))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

export default Satisfaction;
