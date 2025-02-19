const { AuthType } = require("../types/users.types");
const userModel = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { GraphQLString } = require("graphql");

const registerUsers = {
    type: AuthType,
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },


    resolve: async (source, args) => {


        const { username, email, password } = args
        const hashedPassword = bcrypt.hashSync(password, 10)


      const user = await userModel.create({ username, email, password:hashedPassword, role: "ADMIN" })

      const token= jwt.sign({id:user._id},'Asafsafj&8as8fsakfn')



      return {user,token}


    }

}


const loginUser = {
    type: AuthType,  // Assuming AuthType is correctly defined elsewhere
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve: async (source, args) => {
      const { email, password } = args;
  
      // Find the user by email
      const user = await userModel.findOne({ email });
      
      // If the user is not found, throw an error
      if (!user) {
        throw new Error("User not found");
      }
  
      // Compare the provided password with the hashed password stored in the database
      const verifyUser = await bcrypt.compare(password, user.password);  // Compare the hashed password
  
      if (!verifyUser) {
        throw new Error("User not authenticated");
      }
  
      // Generate JWT token with user._id (or email) and set an expiration time for the token
      const token = jwt.sign({ id: user._id }, 'Asafsafj&8as8fsakfn', { expiresIn: '5h' });
  
      // Return user data (don't include sensitive info like password) and the token
      return {
        user: {
          email: user.email,
          username: user.username,  // Assuming the user has a username field
        },
        token
      };
    }
  };
  


module.exports={registerUsers,loginUser}