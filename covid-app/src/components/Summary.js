import React, { useEffect, useState } from 'react';
import './Summary.css';

const Summary = () => {
  const [userData, setUserData] = useState([]);
  const [filterDateFrom, setFilterDateFrom] = useState('');
  const [filterDateTo, setFilterDateTo] = useState('');
  const [filterCity, setFilterCity] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/covidData');
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        console.log('Failed to fetch user data');
      }
    } catch (error) {
      console.log('Error occurred while fetching user data:', error);
    }
  };

  const filterUserData = () => {
    let filteredData = [...userData];

    if (filterDateFrom && filterDateTo) {
      filteredData = filteredData.filter(
        (user) =>
          user.dateOfBirth >= filterDateFrom && user.dateOfBirth <= filterDateTo
      );
    }

    if (filterCity) {
      filteredData = filteredData.filter(
        (user) => user.city.toLowerCase() === filterCity.toLowerCase()
      );
    }

    return filteredData;
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    if (name === 'dateFrom') {
      setFilterDateFrom(value);
    } else if (name === 'dateTo') {
      setFilterDateTo(value);
    } else if (name === 'city') {
      setFilterCity(value);
    }
  };

  return (
    <div className='summary-container'>
      <h1 className='page-title'>Summary</h1>
      <div className="filter-container">
        <label htmlFor="dateFrom">Date From:</label>
        <input
          type="date"
          id="dateFrom"
          name="dateFrom"
          value={filterDateFrom}
          onChange={handleFilterChange}
        />

        <label htmlFor="dateTo">Date To:</label>
        <input
          type="date"
          id="dateTo"
          name="dateTo"
          value={filterDateTo}
          onChange={handleFilterChange}
        />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={filterCity}
          onChange={handleFilterChange}
        />
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Address</th>
              <th>City</th>
              <th>Zip Code</th>
              <th>Land Line</th>
              <th>Cellular Phone</th>
              <th>Had Covid</th>
              <th>Previous Conditions</th>
            </tr>
          </thead>
          <tbody>
            {filterUserData().map((user, index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.dateOfBirth}</td>
                <td>{user.address}</td>
                <td>{user.city}</td>
                <td>{user.zipCode}</td>
                <td>{user.landLine}</td>
                <td>{user.cellularPhone}</td>
                <td>{user.hadCovid ? 'Yes' : 'No'}</td>
                <td>{user.previousConditions.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Summary;
