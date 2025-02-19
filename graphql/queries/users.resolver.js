const { GraphQLList } = require("graphql");
const {userTypes} = require("../types/users.types");
const modelUser= require('../../models/User')
const userResolver={
    type:new GraphQLList(userTypes),
    resolve:async(source,args)=>{
      return await modelUser.find({})
    }
}

module.exports={userResolver}