import React from "react";
import Search from "./Search.js";
import CustomerData from "./data/customersData.json";
import CustomerListRow from "./components/CustomerListRow";

const CustomersList = () => {
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="container">
      <Search search={search} />
      {/* <SearchResults results={CustomerData} /> */}
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile No</th>
            <th scope="col">Phone No</th>
            <th scope="col">Registration Date</th>
          </tr>
        </thead>
        {CustomerData.map((customer, index) => {
          return (
            <tbody>
              <CustomerListRow
                key={customer.id}
                id={customer.id}
                title={customer.title}
                firstName={customer.firstName}
                surname={customer.surname}
                email={customer.email}
                mobileNo={customer.mobileNo}
                phoneNo={customer.phoneNo}
                registrationDate={customer.registrationDate}
              />
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default CustomersList;
