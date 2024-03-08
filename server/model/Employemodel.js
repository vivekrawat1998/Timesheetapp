const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
    employid: Number,
    Name: String,
    email: String,
    HoursWorked: Number,
    tasks: String,
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: "timesheet" }]

});

module.exports = mongoose.model("Employee", EmployeeSchema);
