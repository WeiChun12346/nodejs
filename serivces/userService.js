import User from '../models/user.js';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';

export const getUserList = async () => {
    return await User.find({}, { _id: 0});
};

export const getUserById = async (id) => {
    return await User.findOne({id}, { _id: 0});
};

export const createUser = async (data) => {
    const { password } = data;

    const hashedPassword = await bcrypt.hash(password, 10);

    return await User.create({...data, id: uuid(), password: hashedPassword});
};

export const updateUser = async (id, data) => {
    return await User.findOneAndUpdate({ id }, data, { new: true });
}

export const removeUser = async (id) => {
    // return await User.deleteOne({id});
    return await User.findOneAndUpdate({ id }, { deletedAt: new Date() }, { new: true });
}
