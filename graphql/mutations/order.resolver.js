const { GraphQLInt, GraphQLID } = require("graphql");
const { ordertypes } = require("../types/order.types");
const orderModel=require('../../models/Order')

const orderResolver ={

    type:ordertypes,
    args:{
        user:{type:GraphQLID},
        food:{type:GraphQLID},
        count:{type:GraphQLInt},
        
    },
    resolve:async(source,args)=>{



     const order=   await orderModel.create({...args})
     return order.find({_id:order._id}).popluate('user').poplute('food')


    }


} 

module.exports={orderResolver}