import { AppError } from '../../utils/appError.js';
import { User } from './user.model.js';
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

export const updateUser = async (req,res) => {
    const {id} = req.params;

    const updateUser = await User.findByIdAndUpdate(id,req.body,{returnDocument:"after", runValidators:true});
    if(!updateUser){
        throw new AppError(404,"User not found");
    }

    res.status(200).json({
        success:true,
        message:"User Updated Successfully",
        data: updateUser
    });
}

export const deleteUser = async (req,res) => {
    // id is already validated at the router using middleware and attached, so no need to validate it again.
    const id = req.params.id;

    const deletedUser = await User.findByIdAndDelete(id);
    console.log(deletedUser);
    // considering idempotency for Delete request, even if the user not found , we are considering it as valid deletion operation only
    res.status(200).json({success:true, message:"User deleted successfully", data: []}); //instead of sending user we are sending empty array , because when the user is already deleted it becomes null, which makes inconsistent in the UI. 
}