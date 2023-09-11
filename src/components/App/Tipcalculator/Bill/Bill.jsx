import PropTypes from "prop-types";

function Bill({ bill, onSetBill }) {
  Bill.propTypes = {
    bill: PropTypes.number,
    onSetBill: PropTypes.func,
  };

  return (
    <div>
      <label htmlFor="bill">How much was the bill? </label>
      <input
        type="text"
        name="bill"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

export default Bill;
