const { GraphQLInt, GraphQLID } = require("graphql");
const { ordertypes } = require("../types/order.types");
const orderModel=require('../../models/Order');
const { validateToken } = require("../../utils/Atuh");

const orderResolver ={

    type:ordertypes,
    args:{
        user:{type:GraphQLID},
        food:{type:GraphQLID},
        count:{type:GraphQLInt},
        
    },
    resolve:async(source,args)=>{



     const order=   await orderModel.create({...args})
     return orderModel.find({_id:order._id}).populate ('user').populate('food')


    }


} 

// تحویل دادن سفارش مشتری
const orderDeliver = {
    type:ordertypes,
    args:{
        id:{type:GraphQLID}
    },

    resolve:async(_,{id},context)=>{

        const user= validateToken(context.req)

        if(user.role!=="ADMIN"){
            throw new Error("you can not access this route")
        }


        return await orderModel.findOne({_id:id}).populate('user').populate('food')

    }
} 
module.exports={orderResolver,orderDeliver}