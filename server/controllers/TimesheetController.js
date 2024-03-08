const Timesheetmodel = require("../model/Timesheetmodel");

exports.createTimesheet =  async(req, res) =>{

    const timesheet = await new Timesheetmodel(req.body);
    try {
        await timesheet.save()
        res.status(200).json({
            success: true,
            message:"all timesheets",
            timesheet
        })
    } catch (error) {
        res.status(401).json({
            success: false,
            messsage:err.message
        })
    }
}


exports.getTimeSheets =  async(req, res) =>{
    try {
        const timesheet = await Timesheetmodel.find()
        res.status(200).json({
            success: true,
            message:"all timesheets",
            timesheet
        })
    } catch (error) {
        res.status(401).json({
            success: false,
            messsage:error.message
        })
    }
}



exports.rateTimeSheet = async (req, res) => {
    const { id } = req.params;
    const { ratings } = req.body;
  
    try {
      const timesheet = await Timesheetmodel.findById(id);
  
      if (!timesheet) {
        return res.status(404).json({ message: "Timesheet not found" });
      }
  
      timesheet.ratings = ratings; 
      timesheet.rated = true;
      
      await timesheet.save();
  
      res.status(200).json({
        success: true,
        message: "Timesheet rated successfully",
        timesheet
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
};

  
