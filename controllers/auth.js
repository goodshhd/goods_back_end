const Login = require('../models/Login')

exports.login = () => {
    let { email, password } = req.body;

    Login.findOne({ email: email })
        .then((res) => {
            return res.status(200).json({
                success: true,
                message: "good"
            });
    }).catch(res =>{
        res.status(500).json({
            errors: [{ error: 'Something went wrong' }]
        });
    })
}
