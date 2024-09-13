import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const FoodCart = {
    CartItems:[]

}
let items=createSlice({
    name:"foodcart",
    initialState:FoodCart,
    reducers:{
        addTOFoodCart:(state,action)=>{
            state.CartItems.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            console.log(action.payload)
            state.CartItems.splice(action.payload,1)
           
        } ,
        IncreaseQty:(state,action)=>{
            state.CartItems.map((item)=>{
                if(item.id===action.payload){
                    item.itemQuantity+=1
                    return item
                }else{
                    return item
                }

              })

             
        },
        DecreaseQty:(state,action)=>{
            state.CartItems.map((item)=>{
                if(item.itemQuantity>1){

                
                if(item.id===action.payload){
                    item.itemQuantity-=1
                    return item
                }else{
                    return item
                }
            }

              })
            }
        

    }
})
 
export const{ addTOFoodCart, removeFromCart , IncreaseQty , DecreaseQty }=items.actions
export default items.reducer
