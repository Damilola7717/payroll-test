import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComponent } from "../redux/componentSlice";

const SalaryComponent = () => {
  const components = useSelector((state) => state.components);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [type, setType] = useState("Earning");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const rows = components.map((comp) => (
    <tr key={comp?.id}>
      <td>{comp?.name}</td>
      <td>
        {comp?.type === "Deduction" ? (
          <p className="compType">{comp?.type}</p>
        ) : (
          <p className="compType2">{comp?.type}</p>
        )}
      </td>
      <td>{comp?.amount}</td>
    </tr>
  ));
  const handleSubmit = (e) => {
    e.preventDefault();

    //Check if component name already exists
    const nameExist = components.some((comp) => comp.name === name);

    const id = components.length + 1;
    if (!nameExist) {
      const comp = { id: id, name: name, type: type, amount: amount };
      dispatch(addComponent(comp));

      setName("");
      setAmount(0);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="container">
      <h4 className="title">Salary Components</h4>
      <br />

      <form onSubmit={handleSubmit}>
        <div className="biodataContain2">
          <div>
            <p>Name</p>
            <input
              className="form-control"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <p>Type</p>
            <select
              className="form-control"
              name="type"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Earning">Earning</option>
              <option value="Deduction">Deduction</option>
            </select>
          </div>
          <div>
            <p>Amount</p>
            <input
              className="form-control"
              type="number"
              required
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
          </div>
        </div>
        <button type="submit" className="btn" style={{ width: "100%" }}>
          Create
        </button>
        {error ? <p>Name already exist</p> : null}
      </form>

      <br />
      <hr />
      <h5 className="title">List of salary component</h5>
      <div style={{ overflowX: "auto" }}>
        <div className="table-responsive">
          <table className="table">
            <tbody>{rows}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalaryComponent;
