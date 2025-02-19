const { GraphQLList } = require("graphql");
const FoodType = require("../types/food.types");
const foodModel=require('../../models/Food')


const foodResolver={
    type: new GraphQLList(FoodType),
    resolve:async(source,args)=>{
        return await foodModel.find({}).populate('category')
    }
}

module.exports={foodResolver}