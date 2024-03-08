import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom"
const MyTimesheets = () => {
    const [date, setDate] = useState("");
    const [hoursWorked, setHoursWorked] = useState(0);
    const [tasks, setTasks] = useState('');
    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [reportingManager, setReportingManager] = useState('');
    const [employid, setEmployid] = useState('');
   const navigate =useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/v1/create/employe", { date, Name, email, reportingManager, hoursWorked, tasks });
           
            if (res.status === 200) {
                alert("Timesheet created successfully");
                setDate("");
                setEmail("");
                setEmployid("");
                setHoursWorked(0);
                setReportingManager("");
                setName("");
                setTasks("");
                navigate("/admin")
            } else {
                alert("Failed to create timesheet");
            }
        } catch (error) {
            console.error(error);
            alert("Error occurred while creating timesheet");
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">My Timesheet</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label> Employee ID:</label>
                    <input type='number' value={employid} onChange={e => setEmployid(e.target.value)} placeholder="Employee ID" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label>Name:</label>
                    <input type='text' value={Name} onChange={e => setName(e.target.value)} placeholder="Name" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label>Email:</label>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label>Reporting Manager:</label>
                    <input type='text' value={reportingManager} onChange={e => setReportingManager(e.target.value)} placeholder="Reporting Manager" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label>Date:</label>
                    <input type='date' value={date} onChange={e => setDate(e.target.value)} className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label>Hours Worked:</label>
                    <input type='number' value={hoursWorked} onChange={e => setHoursWorked(e.target.value)} placeholder="Hours Worked" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label>Tasks:</label>
                    <input type='text' value={tasks} onChange={e => setTasks(e.target.value)} placeholder="Tasks" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className='bg-blue-500 cursor-pointer text-white py-2 px-4 rounded-md hover:bg-blue-600 transition '>
                    <button type="submit" className="bg-blue-500 cursor-pointer text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default MyTimesheets;
