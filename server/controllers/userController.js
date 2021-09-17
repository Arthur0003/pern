const bcrypt = require('bcrypt');
const { User } = require('../models/models');
const jwt = require('jsonwebtoken');

const genToken = (email, id) => {
    return jwt.sign(
        {
            id,
            email
        },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    );
};

class UserController {

    async registrateUser(req, res) {
        const { email, password } = req.body;
        const userCheck = await User.findOne({ where: { email } });

        if (userCheck) {
            return res.json('change your email');
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const newUser = await User.create({ email, password: hashPassword });
        const token = genToken(newUser.id, newUser.email);

        return res.json({ token });
    }

    async getUser(req, res) {
        const { email, password } = req.body;
        const userCheck = await User.findOne({ where: { email } });

        if (!userCheck) {
            return res.json('no user with that email');
        }

        const comparePassword = await bcrypt.compareSync(password, userCheck.password);

        if (!comparePassword) {
            return res.json('wrong password');
        }

        const token = genToken(userCheck.id, userCheck.email);

        return res.json({ token });
    }

    async checkUser(req, res) {
        const token = genToken(req.user.id, req.user.email);
        return res.json({ token });
    }

}

module.exports = new UserController();
