import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addDeduction,
  addEarning,
  startDeduction,
  startEarning,
  subtractDeduction,
  subtractEarning,
} from "../redux/employeeSlice";

const ComponentList = ({ data, empComp, eId }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const { id, name, type, amount } = data;

  const handleChecked = () => {
    setIsChecked(!isChecked);

    // console.log(isChecked);
    const empData = { id: eId, amount: amount };

    if (isChecked === true && type === "Deduction") {
      dispatch(subtractDeduction(empData));
    }

    if (isChecked === false && type === "Deduction") {
      dispatch(addDeduction(empData));
    }

    if (isChecked === true && type === "Earning") {
      dispatch(subtractEarning(empData));
    }

    if (isChecked === false && type === "Earning") {
      dispatch(addEarning(empData));
    }
    console.log(type);
  };

  const employeeComp = empComp.find((emp) => {
    return emp?.id == id;
  });

  useEffect(() => {
    if (employeeComp?.id == id) {
      setIsChecked(true);

      const empData = { id: eId, amount: amount };

      if (isChecked === false && type === "Deduction") {
        dispatch(startDeduction(empData));
      }

      if (isChecked === false && type === "Earning") {
        dispatch(startEarning(empData));
      }
    }
  }, []);

  return (
    <>
      <td>
        <input
          type="checkbox"
          name={name}
          id={id}
          checked={isChecked}
          onChange={handleChecked}
        />
      </td>
      <td>{name}</td>
      <td>
        {type === "Deduction" ? (
          <p className="compType">{type}</p>
        ) : (
          <p className="compType2">{type}</p>
        )}
      </td>
      <td>{amount}</td>
    </>
  );
};

export default ComponentList;
