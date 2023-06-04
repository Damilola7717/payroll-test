import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatNo } from "../utils/formatCurrency";

const Detail = () => {
  const { id } = useParams();

  const data = useSelector((state) => state.employees);

  const employeeData = data.find((emp) => {
    return emp.id == id;
  });

  const { fullName, position, salary } = employeeData;
  const components = employeeData.components;

  const totalEarning = components
    .filter(({ type }) => type === "Earning")
    .reduce((sum, record) => sum + record.amount, 0);

  const totalDeduction = components
    .filter(({ type }) => type === "Deduction")
    .reduce((sum, record) => sum + record.amount, 0);
  // console.log(components);

  const netPay = salary + totalEarning - totalDeduction;

  return (
    <div className="container">
      <h4 className="title">Employee details</h4>

      <div className="biodataContain row">
        <div className="col-md-4 col-sm-4">
          <p>Name</p>
          <p>{fullName}</p>
        </div>
        <div className="col-md-4 col-sm-4">
          <p>Position</p>
          <p>{position}</p>
        </div>
        <div className="col-md-4 col-sm-4">
          <p>Salary</p>
          <p>&#8358;{formatNo(parseInt(salary))}</p>
        </div>
      </div>

      <hr className="line" />
      <div className="cardContainer">
        <div className="overcardContain">
          <div>
            <p>Earning</p>
          </div>
          <div className="cardContent">
            {components.map((comp) => {
              if (comp.type == "Earning") {
                return (
                  <div key={comp.id}>
                    <p>{comp.name}</p>{" "}
                    <p>&#8358;{formatNo(parseInt(comp.amount))}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="overcardContain">
          <div style={{ backgroundColor: "#FF3767" }}>
            <p>Deduction</p>
          </div>
          <div className="cardContent">
            {components.map((comp) => {
              if (comp.type == "Deduction") {
                return (
                  <div key={comp.id}>
                    <p>{comp.name}</p>{" "}
                    <p>&#8358;{formatNo(parseInt(comp.amount))}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="netPay">
        <p>Net pay</p>
        <p>&#8358;{formatNo(parseInt(netPay))}</p>
      </div>
    </div>
  );
};

export default Detail;
