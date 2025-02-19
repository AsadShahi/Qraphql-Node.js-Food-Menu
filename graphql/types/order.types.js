const { GraphQLObjectType, GraphQLInt, GraphQLBoolean } = require("graphql");
const { userTypes } = require("./users.types");
const FoodType = require("./food.types");

const ordertypes= new GraphQLObjectType({

    name:"OrderType",
    
    fields:()=>({
        user:{type:userTypes},
        food:{type:FoodType},
        count:{type:GraphQLInt},
        isDeliver:{type:GraphQLBoolean}
    })

})

module.exports = {ordertypes}