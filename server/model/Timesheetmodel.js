const mongoose = require("mongoose");


const TimesheetmodelSchema = mongoose.Schema({
    employid: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    date: Date,
    HoursWorked: Number,
    tasks: [String],
    rated: Boolean,
    ratings: { type: Number, min: 1, max: 5 }
})


module.exports = mongoose.model("timesheet", TimesheetmodelSchema)