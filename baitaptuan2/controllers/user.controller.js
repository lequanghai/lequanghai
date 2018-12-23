import User from '../models/user';
import { get } from 'mongoose';

const UserController = {};

UserController.getAll = async (req, res) => {
    try {
        await User.find().exec((err, users) => {
            if (err) {
                res.status(500).send(err);
            }
            return res.json({
                users,
            });
        });
    } catch (err) {
        return res.status(400).json({
            isSuccess: false,
            message: err.message,
            error: err
        });
    }
};
// function getUsers(res) {
//     User.find(function (err, users) {

//         if (err) {
//             res.status(400).json(err);
//         } else {
//             res.json(users);
//         }
//     })
// }
UserController.getOneUser = async (req, res) => {
    try {
        const _id = req.params.id;
        // const user = await User.findById(_id);
        // console.log(user);
        await User.findById((_id), function(err, user) {

            if(err) {
                throw err;
            } else {
                res.json(user);
            }

        });


    } catch(e) {
        return res.status(400).json({
            isSuccess: false,
            message: e.message,
            error: e
        });
    }
};

UserController.addUser = async (req, res) => {
    try {
        const { password, refNames, firstName, gender, email } = req.body;

        console.log(typeof gender);
        if (!password) {
            return res.status(400).json({
                isSuccess: false,
                error: {
                    message: 'password is required field'
                }
            });
        }
        const user = new User({
            password,
            refNames,
            firstName,
            gender,
            email
        });
        await user.save();
        return res.json({
            isSuccess: true,
            user
        });
        // const firstName = data.firstName;
        // const gender = data.gender;
        // const email = data.email;

    } catch (err) {
        return res.status(400).json({
            isSuccess: false,
            error: err
        });
    }
};


 UserController.updateUser = async (req, res) => {

    try {
        const _Id = req.params.id;
        const { password, refNames, firstName, gender, email } = req.body;
        await User.findByIdAndUpdate(_Id, { $set: { password, refNames, firstName, gender, email }}, (err, user) => {
            if (err) {
                return res.status(400).json({isSuccess: false, err: err.message});
            } else {
                return res.status(200).json({isSuccess: true, user: user});
            }
        });
    } catch (e) {
        return res.status(400).json({isSuccess: false, error: e.message});
    }
};


UserController.deleteUser = async (req, res) => {
    try {
        const _Id = req.params.id;
        await User.findByIdAndRemove(_Id, (error, user) => {
            if (error) {
                return res.status(400).json({isSuccess: false, error: e});
            } else {
                return res.status(200).json({isSuccess: true, user: user});
            }
        });
    } catch (e) {
        return res.status(400).json({isSuccess: false, error: e});
    }
};


export default UserController;
