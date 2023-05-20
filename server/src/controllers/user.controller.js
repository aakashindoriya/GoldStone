const User = require("../models/user.model")
const axios = require("axios")
const ADDUSERS = async (req, res) => {
    try {
        let response = await axios("https://gorest.co.in/public/v2/users", {
            Authorization: "Bearer ca72d247c665299690a8b7f005077c2efe7cabc0c1dfae3a2bf45045ed5df52c"
        })
        const SavedUser = []
        for (el of response.data) {
            let { email, name, gender, status } = el
            let user = await User.create({ email, name, gender, status })
            SavedUser.push(user)

        }
        res.status(201).send(SavedUser)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const ALLUSERS = async (req, res) => {
    try {
        let Alluser = await User.find({})
        res.status(200).send(Alluser)
    } catch (error) {
        res.status(404).send(error.message)
    }
}
const SINGLEUSER = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const UPDATEUSER = async (req, res) => {

    try {
        const { id } = req.params
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const { email, name, gender, status } = req.body
        // Update the user with the provided data
        console.log(req.body)
        user.set({ email, name, gender, status });
        const updatedUser = await user.save();
        console.log(updatedUser)

        return res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = { ADDUSERS, ALLUSERS, UPDATEUSER, SINGLEUSER }