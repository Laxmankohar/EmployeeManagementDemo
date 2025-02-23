import {Router} from "express"
import {AddEmployee,GetEmployee,GetEmployeeById,UpdateEmployee,DeleteEmployee} from "../Controller/employee.controller.js";

const router = Router();

router.route("/addEmployee").post(AddEmployee)
router.route("/getEmployee").get(GetEmployee)
router.route("/getEmployeeById/:id").get(GetEmployeeById)  
router.route("/updateEmployee/:id").patch(UpdateEmployee)
router.route("/deleteEmployee/:id").delete(DeleteEmployee)

export default router;