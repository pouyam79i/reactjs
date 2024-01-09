import { useState } from "react";

interface itemData {
  id: number;
  description: string;
  amount: number;
  category: number;
}

interface props {
  items?: itemData[];
}

const Table = ({ items = [] }: props) => {
  const [category, setCategory] = useState(0);

  const updateTotal = (category = 0) => {
    let t = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].category === category || category === 0) {
        t = t + items[i].amount;
      }
    }
    return t;
  };

  const [total, setTotal] = useState(updateTotal(0));

  return (
    <div>
      <div className="mb-3">
        <select
          id="category"
          className="form-select"
          defaultValue="0"
          onChange={(event) => {
            setCategory(parseInt(event.target.value));
            setTotal(updateTotal(parseInt(event.target.value)));
          }}
        >
          <option value="0">All Categories</option>
          <option value="1">Groceries</option>
          <option value="2">Utilities</option>
          <option value="3">Entertainment</option>
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
                (category === 0 || category === item.category) && (
                  <tr key={item.id}>
                    <td>{item.description}</td>
                    <td>${item.amount}</td>
                    <td>
                      {item.category === 1 && "Groceries"}
                      {item.category === 2 && "Utilities"}
                      {item.category === 3 && "Entertainment"}
                    </td>
                  </tr>
                )
              );
            })}

            <tr key={-1}>
              <td>
                <b>Total</b>
              </td>
              <td>
                <b>${total}</b>
              </td>
              <td>
                <b>
                  {category === 0 && "All"}
                  {category === 1 && "Groceries"}
                  {category === 2 && "Utilities"}
                  {category === 3 && "Entertainment"}
                </b>
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
