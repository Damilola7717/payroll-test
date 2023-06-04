import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeList = ({ data }) => {
  const navigate = useNavigate();

  const rows =
    data.length === 0 ? (
      <tr>
        <td colSpan={8} style={{ textAlign: "center" }}>
          You don't have any employee yet
        </td>
      </tr>
    ) : (
      data.map((emp) => (
        <tr key={emp?.id}>
          <td>{emp?.fullName}</td>
          <td>{emp?.position}</td>
          <td className="btnContain">
            <button
              className="btn"
              onClick={() =>
                navigate(`/details/${emp?.id}`, { replace: false })
              }
            >
              View
            </button>
            <button
              className="btn"
              onClick={() => navigate(`/edit/${emp?.id}`, { replace: false })}
            >
              Edit
            </button>
          </td>
        </tr>
      ))
    );
  return (
    <div className="table-responsive">
      <table className="table">
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
