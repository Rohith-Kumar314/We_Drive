import * as userService from './user.service.js';

export const getAllUsers = async (req,res) => {
    const allUsers = await userService.getAllUsers();
    res.status(200).json({success:false,message:"Data Fetched successfully", data:allUsers});
}

export const getUser = async(req,res) => {
}

export const getCurrentUser = async(req,res) => {
    const id = req.user.id;
    const currUser = await userService.getCurrentUser(id);
    res.status(200).json({success:true,message:"User Fetched successfully", data: currUser});
}

export const createUser = async (req,res) => {
    const newUser = await userService.createNewUser(req.body);
    res.status(200).json({success:true, message:"User created successfully", data:newUser});
}

export const updateUser = async (req,res) => {}
export const deleteUser = async (req,res) => {}