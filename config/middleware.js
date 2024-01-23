const SERVICE_KEY = process.env.SERVICE_KEY;

export default (req, res, next) => {
    const serviceKey = req.headers['service-key'];
    if (serviceKey && serviceKey === SERVICE_KEY) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};
