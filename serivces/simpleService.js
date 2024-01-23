import Simple from '../models/simple.js';
import { v4 as uuid } from 'uuid';

export const getSimpleList = async () => {
    return await Simple.find({}, { _id: 0});
};

export const createSimple = async (data) => {
    return await Simple.create({id: uuid(),...data});
};

export const updateSimple = async (id, data) => {
    return await Simple.findOneAndUpdate({ id }, data, { new: true });
}

export const removeSimple = async (id) => {
    // return await Simple.deleteOne({id});
    return await Simple.findOneAndUpdate({ id }, { deletedAt: new Date() }, { new: true });
}
