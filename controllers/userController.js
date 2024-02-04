import { getUserById, getUserList, createUser, updateUser, removeUser } from "../serivces/userService.js";

export const getUsers = async (req, res) => {
    try {
        const result = await getUserList(req)
        res.status(200).json(result);
    } catch (error) {
        console.error(`Error fetching users: ${error.message}`);
        throw error;
    }
};

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await getUserById(id)
        res.status(200).json(result);
    } catch (error) {
        console.error(`Error fetching users: ${error.message}`);
        throw error;
    }
};

export const create = async (req, res) => {
    try {
        const result = await createUser(req.body)
        res.status(200).json(result);
    } catch (error) {
        console.error(`Error fetching users: ${error.message}`);
        throw error;
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateUser(id, req.body)
        res.status(200).json(result);
    } catch (error) {
        console.error(`Error fetching users: ${error.message}`);
        throw error;
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await removeUser(id)
        res.status(200).json(result);
    } catch (error) {
        console.error(`Error fetching users: ${error.message}`);
        throw error;
    }
};
