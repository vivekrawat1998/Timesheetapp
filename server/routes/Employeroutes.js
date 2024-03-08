const express =require("express");
const router = express.Router();

const {createEmployees, getEmployees} = require("../controllers/Employecontollers")




router.route("/create/employe").post(createEmployees);  
router.route("/get/employe").get(getEmployees);



module.exports = router