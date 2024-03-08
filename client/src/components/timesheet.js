import React, { useEffect, useState } from "react";
import axios from "axios";

const TimeSheet = () => {
  const [employeeRatings, setEmployeeRatings] = useState({});
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = async (e, employid) => {
    e.preventDefault();
    console.log(employid)
    try {
      await axios.post(`http://localhost:8080/api/v1/rate/${employid}`, {
        rating: employeeRatings[employid],
      });
      setEmployeeRatings({ ...employeeRatings, [employid]: "" });
    } catch (error) {
      console.error(`Error submitting rating: ${error.message}`);
      setError("Error submitting rating. Please try again later.");
    }
  };

  const handleRatingChange = (e, employid) => {
    setEmployeeRatings({
      ...employeeRatings,
      [employid]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/get/employe`);
        const jsonData = response.data.employees;
        setEmployees(jsonData);
        setLoading(false);
        const initialRatings = {};
        jsonData.forEach((employee) => {
          initialRatings[employee._id] = "";
        });
        setEmployeeRatings(initialRatings);
      } catch (error) {
        console.error("Error fetching employee data:", error.message);
        setError("Error fetching employee data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Employee TimeSheet</h1>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : Array.isArray(employees) && employees.length > 0 ? (
          employees.map((employee) => (
            <div key={employee._id} className="mb-4 p-4 border rounded">
              <h2 className="text-xl font-bold mb-2">Employee: {employee.Name}</h2>
              <p>Email: {employee.email}</p>
              <p>Employee ID: {employee.employid}</p>
              <p>Hours Worked: {employee.HoursWorked}</p>
              <p>Tasks: {employee.tasks}</p>
              <p>Reporting Manager: {employee.reportingManager}</p>
              <form onSubmit={(e) => handleSubmit(e, employee._id)}>
                <label htmlFor={`ratings-${employee._id}`} className="mr-2">
                  Ratings:
                </label>
                <input
                  type="number"
                  id={`ratings-${employee._id}`}
                  value={employeeRatings[employee._id]}
                  onChange={(e) => handleRatingChange(e, employee._id)}
                  className="mr-2 p-2 border border-gray-400 rounded"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                  Submit Ratings
                </button>
              </form>
            </div>
          ))
        ) : (
          <p>No employees found</p>
        )}
      </div>
    </div>
  );
};

export default TimeSheet;
