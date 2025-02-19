const jwt = require('jsonwebtoken')
const userModel = require('../models/User')


const getUserById = (id) => {
    return userModel.findOne({ _id: id });  // Corrected to use _id
}

const validateToken = async (req) => {

    if (req) {

        const authHeader = req.headers.authorization;

        const token = authHeader.replace("Bearer", "").trim();

        if (token) {
            // verify
            const payloadToken = jwt.verify(token, 'Asafsafj&8as8fsakfn')
            const user = await getUserById(payloadToken.id)
            console.log(user)
            return user
            
        } else {
            throw new Error("No Auth")
        }


    } else {
        throw new Error("No auth.....")
    }

}

module.exports={validateToken}
