import { useState } from "react";

interface ItemData {
  description: string;
  amount: number;
  category: string;
}
interface Props {
  items?: ItemData[];
  onDelete?: (item: ItemData) => void;
}

const Table = ({ items = [], onDelete = (item: ItemData) => {} }: Props) => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <div className="mb-3">
        <select
          id="category"
          className="form-select"
          defaultValue="0"
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        >
          <option value="All">All Categories</option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
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
            {items.map((item) => {
              return (
                (category === "All" || category === item.category) && (
                  <tr key={item.description}>
                    <td>{item.description}</td>
                    <td>${item.amount}</td>
                    <td>{item.category}</td>
                    <td>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => {
                          onDelete(item);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>
                $
                {items.reduce((acc, item) => {
                  if (category === "All" || category === item.category)
                    return item.amount + acc;
                  else return 0 + acc;
                }, 0)}
              </td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Table;
