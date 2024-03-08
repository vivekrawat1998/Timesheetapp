const Employee = require("../model/Employemodel");

exports.createEmployees = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(200).json({
            success: true,
            message: "Created successfully",
            employee
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json({
            success: true,
            message: "Get employees",
            employees
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
