const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = require("graphql");
const FoodType = require("../types/food.types");
const foodModel=require('../../models/Food')

const addFood= {

    type:FoodType,
    args:{   

        name:{type:GraphQLString},
        price:{type:GraphQLInt},
        image:{type:GraphQLString},
        category:{type:GraphQLID},
        inventory:{type:GraphQLString},

    },

    resolve:async(_, args)=>{

        return await foodModel.create({
            name:args.name,
            price:args.price,
            image:'images_test.png',
            category:args.category,
            inventory:args.inventory
        })
    }
}


module.exports={addFood}