const Table = () => {
  return (
    <div>
      <div className="mb-3">
        <select id="category" className="form-select" defaultValue={0}>
          <option value={0}>All Categories</option>
          <option value={1}>Groceries</option>
          <option value={2}>Utilities</option>
          <option value={3}>Entertainment</option>
        </select>
      </div>

      <div className="mb-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>Total</b>
              </td>
              <td>
                <b>$1000</b>
              </td>
              <td>
                <b>All</b>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
