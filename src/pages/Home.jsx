import React from "react";
import EmployeeList from "../components/EmployeeList";
import { useSelector } from "react-redux";

const Home = () => {
  const data = useSelector((state) => state.employees);

  return (
    <div className="container">
      <p className="title">List of employees</p>
      <div style={{ overflowX: "auto" }}>
        <EmployeeList data={data} />
      </div>
    </div>
  );
};

export default Home;
