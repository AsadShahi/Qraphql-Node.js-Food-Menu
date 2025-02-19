const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = require("graphql");

const FoodType= new GraphQLObjectType({
    name:'FoodType',
    fields:()=>({

        _id:{type:GraphQLID},
        name:{type:GraphQLString},
        price:{type:GraphQLInt},
        image:{type:GraphQLString},
        category:{type:GraphQLID},
        inventory:{type:GraphQLString},

    })
})

module.exports=FoodType