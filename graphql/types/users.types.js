const { GraphQLObjectType, GraphQLString, GraphQLEnumType } = require("graphql");

const userTypes= new GraphQLObjectType({
    name:'UserType',
    fields:()=>({
        username:{type:GraphQLString},
        password:{type:GraphQLString},
        // role:{type:GraphQLEnumType}
    })
})



const AuthType= new GraphQLObjectType({
 name:'AuthType',

 fields:()=>({
    username:{type:GraphQLString},
    email:{type:GraphQLString},
    password:{type:GraphQLString},
    token:{type:GraphQLString},
    user:{type:userTypes}
 })
 

})

module.exports = {AuthType,userTypes}
