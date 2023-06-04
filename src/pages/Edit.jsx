import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ComponentList from "../components/ComponentList";
import { formatNo } from "../utils/formatCurrency";

const Edit = () => {
  const { id } = useParams();

  const data = useSelector((state) => state.employees);
  const components = useSelector((state) => state.components);

  const employeeData = data.find((emp) => {
    return emp.id == id;
  });

  const empComp = employeeData.components;
  const { salary, totalDeduction, totalEarning } = employeeData;

  const rows = components.map((comp) => (
    <tr key={comp?.id}>
      <ComponentList eId={employeeData?.id} data={comp} empComp={empComp} />
    </tr>
  ));

  return (
    <div className="container">
      <h4 className="title">Assign component to: {employeeData?.fullName}</h4>
      <br />
      <div className="biodataContain row">
        <div className="col-md-3 col-sm-3">
          <p>Salary</p>
          <p>&#8358;{formatNo(parseInt(salary))}</p>
        </div>
        <div className="col-md-3 col-sm-3">
          <p>Total Deduction</p>
          <p>&#8358;{formatNo(parseInt(totalDeduction))}</p>
        </div>
        <div className="col-md-3 col-sm-3">
          <p>Total Earning</p>
          <p>&#8358;{formatNo(parseInt(totalEarning))}</p>
        </div>
        <div className="col-md-3 col-sm-3">
          <p>Net Pay</p>
          <p>
            &#8358;{formatNo(parseInt(salary + totalEarning - totalDeduction))}
          </p>
        </div>
      </div>
      <br />
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

export default Edit;
