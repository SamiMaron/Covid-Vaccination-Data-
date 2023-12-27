import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css'; // Import the CSS file


const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    city: '',
    zipCode: '',
    landline: '',
    cellularPhone: '',
    hasCovidHistory: false,
    previousConditions: []
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      if (name === 'previousConditions') {
        let updatedConditions = formData.previousConditions;
        if (checked) {
          updatedConditions.push(value);
        } else {
          updatedConditions = updatedConditions.filter((condition) => condition !== value);
        }
        setFormData({ ...formData, previousConditions: updatedConditions });
      } else {
        setFormData({ ...formData, [name]: checked });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
        // Send form data to the backend for processing and storage
        console.log("before fetch");
        const response = await fetch('http://localhost:8080/api/saveFormData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          console.log('Form data saved successfully!');
          navigate('/summary');
        } else {
          console.log('Failed to save form data');
        }
      } catch (error) {
        console.log('Error occurred while saving form data:', error);
      }
  };

  return (
    <div className="container">
      <h1 className='page-title'>User Registration</h1>
      <div className="row justify-content-center">
        <div className="col-lg-6">
         
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">City</label>
                <select
                  className="form-control"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required>
                  <option value="">Select a city</option>
                  <option value="Jerusalem">Jerusalem</option>
                  <option value="TelAviv">Tel Aviv</option>
                  <option value="Haifa">Haifa</option>
                  <option value="RishonLeZion">Rishon LeZion</option>
                  <option value="PetahTikva">Petah Tikva</option>
                  <option value="Ashdod">Ashdod</option>
                  <option value="Netanya">Netanya</option>
                </select>
            </div>
            <div className="mb-3">
              <label htmlFor="zipCode" className="form-label">Zip Code</label>
              <input
                type="text"
                className="form-control"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="landline" className="form-label">Landline</label>
              <input
                type="text"
                className="form-control"
                id="landline"
                name="landline"
                value={formData.landline}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cellularPhone" className="form-label">Cellular Phone</label>
              <input
                type="text"
                className="form-control"
                id="cellularPhone"
                name="cellularPhone"
                value={formData.cellularPhone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="hasCovidHistory"
                name="hasCovidHistory"
                checked={formData.hasCovidHistory}
                onChange={handleInputChange}
              />
              <label htmlFor="hasCovidHistory" className="form-check-label">Have you been infected by COVID-19 before?</label>
            </div>
            <div className="mb-3 form-check">
              <label className="form-check-label">Previous Conditions</label>
              <br />
              <input
                type="checkbox"
                className="form-check-input"
                id="diabetes"
                name="previousConditions"
                value="Diabetes"
                checked={formData.previousConditions.includes('Diabetes')}
                onChange={handleInputChange}
              />
              <label htmlFor="diabetes" className="form-check-label">Diabetes</label>
              <br />
              <input
                type="checkbox"
                className="form-check-input"
                id="cardiovascularProblems"
                name="previousConditions"
                value="Cardiovascular Problems"
                checked={formData.previousConditions.includes('Cardiovascular Problems')}
                onChange={handleInputChange}
              />
              <label htmlFor="cardiovascularProblems" className="form-check-label">Cardiovascular Problems</label>
              <br />
              <input
                type="checkbox"
                className="form-check-input"
                id="allergies"
                name="previousConditions"
                value="Allergies"
                checked={formData.previousConditions.includes('Allergies')}
                onChange={handleInputChange}
              />
              <label htmlFor="allergies" className="form-check-label">Allergies</label>
              <br />
              <input
                type="checkbox"
                className="form-check-input"
                id="otherCondition"
                name="previousConditions"
                value="Other"
                checked={formData.previousConditions.includes('Other')}
                onChange={handleInputChange}
              />
              <label htmlFor="otherCondition" className="form-check-label">Other:</label>
              <input
                type="text"
                className="form-control"
                id="otherConditionInput"
                name="otherCondition"
                value={formData.otherCondition}
                onChange={handleInputChange}
                disabled={!formData.previousConditions.includes('Other')}
              />
            </div>
            <button type="submit" className="my-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
