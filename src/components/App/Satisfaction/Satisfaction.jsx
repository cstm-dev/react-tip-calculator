function Satisfaction() {
  return (
    <div>
      <label htmlFor="tipPercentage">How did you like the service? </label>
      <select name="tipPercentage" value="0">
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

export default Satisfaction;
