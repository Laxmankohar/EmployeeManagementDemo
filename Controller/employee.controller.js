import Employee from "../Model/employee.models.js";
import mongoose, { isValidObjectId } from "mongoose";

const AddEmployee = async (req, res) => {
  try {
    const { name, email, phonenumber, address, city, state } = req.body;
    // console.log(req.body);

    if (!name || !email || !phonenumber || !address || !city || !state) {
      res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    const existingEmployee = await Employee.findOne({ email: email });

    if (existingEmployee) {
      return res.status(400).json({
        success: false,
        message: "Employee already exists",
      });
    } else {
      const newEmployee = new Employee(req.body);
      const savedEmployee = await newEmployee.save();
      res.status(201).json(savedEmployee);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const GetEmployee = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);

    if (!employees) {
      return res.status(404).json({
        success: false,
        message: "No employee found",
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const GetEmployeeById = async (req, res) =>{
  try{
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID",
      });
    }

    const employee =  await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }
    res.status(200).json(employee);

  }catch(e){
    res.status(500).json({ message: e.message });
  }
}

const UpdateEmployee = async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID",
      });
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json(updatedEmployee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const DeleteEmployee = async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID",
      });
    }

    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);

    if (!deletedEmployee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { AddEmployee, GetEmployee,GetEmployeeById, UpdateEmployee, DeleteEmployee };
