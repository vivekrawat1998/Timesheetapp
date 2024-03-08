const express =require("express");
const router = express.Router();

const {createTimesheet, getTimeSheets,rateTimeSheet} = require("../controllers/TimesheetController")




router.route("/create").post(createTimesheet);  
router.route("/get").get(getTimeSheets);
router.route("/rate/:id").post(rateTimeSheet);


module.exports = router