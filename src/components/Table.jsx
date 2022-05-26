import React from "react";

const Table = ({ showData, deleteData }) => {
  return (
    <table>
      <thead>
        <th>UserName</th>
        <th>Age</th>
        <th>Address</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Marital Status</th>
        <th>Profile</th>
      </thead>
      {showData.map((data) => (
        <tr>
          <td>{data.name}</td>
          <td>{data.age}</td>
          <td>{data.address}</td>
          <td>{data.Department}</td>
          <td>{data.salary}</td>
          <td>{data.Marriage_Status ? "Married" : "Single"}</td>
          {/* <td>{data.profile_photo[0]}</td> */}
          <button onClick={() => deleteData(data)}>delete</button>
        </tr>
      ))}
    </table>
  );
};

export default Table;
