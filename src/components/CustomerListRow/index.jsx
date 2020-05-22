import React from "react";
import moment from "moment";

function ConvertDate(regDate) {
  // return moment(regDate, "LL");
  return moment(regDate).format("ll");
  //return regDate;
}

const CustomersListRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.firstName}</td>
      <td>{props.surname}</td>
      <td>{props.email}</td>
      <td>{props.mobileNo}</td>
      <td>{props.phoneNo}</td>
      <td>{ConvertDate(props.registrationDate)}</td>
    </tr>
  );
};

export default CustomersListRow;
