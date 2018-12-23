import Class from '../models/class';

const ClassController = {};

ClassController.addClass = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(400).json({
            isSuccess: false,
            message: err.message,
            error: err
        });
    }
};

ClassController.getAll = async (req, res) => {
    try {
        return res.json({ message: 'hello' });
    } catch (err) {
        return res.status(400).json({
            isSuccess: false,
            message: err.message,
            error: err
        });
    }
};

export default ClassController;
