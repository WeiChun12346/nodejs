import { getSimpleList, createSimple, updateSimple, removeSimple } from "../serivces/simpleService.js";

export const getSimple = async (req, res) => {
    try {
        const result = await getSimpleList(req)
        res.status(200).json(result);
    } catch (error) {
        console.error(`Error fetching simples: ${error.message}`);
        throw error;
    }
};

export const create = async (req, res) => {
    try {
        const result = await createSimple(req.body)
        res.status(200).json(result);
    } catch (error) {
        console.error(`Error fetching simples: ${error.message}`);
        throw error;
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateSimple(id, req.body)
        res.status(200).json(result);
    } catch (error) {
        console.error(`Error fetching simples: ${error.message}`);
        throw error;
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await removeSimple(id)
        res.status(200).json(result);
    } catch (error) {
        console.error(`Error fetching simples: ${error.message}`);
        throw error;
    }
};
