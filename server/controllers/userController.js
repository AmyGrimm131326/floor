const User = require('../models/user')
module.exports = {
    loginUser(req, res) {
        const { email, password } = req.body;
        console.log(req.body)
        User.findOne({ email: email }).then(User => {
            if (!User) {
                res.send({ message: 'Email does not exist' });
            } else {
                User.password === password ? res.send(User) : res.send({ message: 'Password is Incorrect' });
            }
        }).catch(error => res.send(error));
    }
};