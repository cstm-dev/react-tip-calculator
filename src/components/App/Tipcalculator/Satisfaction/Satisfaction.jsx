import PropTypes from "prop-types";

function Satisfaction({ children, tip, onSetTipById, id }) {
  Satisfaction.propTypes = {
    children: PropTypes.string,
    tip: PropTypes.array,
    onSetTipById: PropTypes.func,
    id: PropTypes.number,
  };

  const tipById = tip.filter((e) => e.id === id).map((e) => e.tip);
  const [num] = tipById;

  return (
    <div>
      <label htmlFor="tipPercentage">{children} </label>
      <select
        name="tipPercentage"
        value={num}
        onChange={(e) => onSetTipById(Number(e.target.value), id)}
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
