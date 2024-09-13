import React from 'react'
import { useSelector } from 'react-redux'
import { Card,CardActionArea,CardContent,Typography ,Box,CardMedia} from '@mui/material'
import { useDispatch } from 'react-redux'
import { removeFromCart } from './Reducer'
import  {IncreaseQty} from './Reducer'
import { DecreaseQty} from './Reducer'

const Cart = () => {
  const dispatch=useDispatch()
    let CartItems=useSelector((state)=>{
        return state.CartItems
        console.log(state)

    })
    console.log(CartItems)

     
let SubTotal=CartItems.reduce((acc,item,i)=>{
  return acc+item.price*item.itemQuantity
},0)




    return(
      <>
    <div className="container">
     
    {CartItems.map((item,index)=>{
        
        return(
          <div className="card MainCard" >
             <div className="row g-0">
              <div className="col-md-4">
            <img src={item.image} className="img-fluid rounded-start CartImg" alt="..."/>
             </div>
              <div className="col-md-6">
             <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
              <p className="card-text price"><b>{item.price}</b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
<path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg></p>
             
             <button onClick={()=>{
              dispatch(removeFromCart(index))
             }}>Remove From Cart</button>
             <div style={{marginTop:"10px"}}><button onClick={()=>{dispatch( DecreaseQty(item.id))}}>-</button>Qty-{item.itemQuantity}<button onClick={()=>{dispatch( IncreaseQty(item.id))}}>+</button></div>
            </div>
          </div>
          <div className="col-md-2">
            <b>item Total={item.price*item.itemQuantity}</b>
            </div>
       </div>
      </div>
        )

    })}

{ SubTotal !== 0 ? <div className="row" style={{textAlign:"end",marginRight:"10px",marginTop:"10px"}}><h2>Sub Total={SubTotal}</h2> </div> 
:  <div className="row" style={{display:"flex",textAlign:"center",marginTop:"250px"}}><h2>Cart Is Empty</h2> </div>}
    </div>
    
    </>







    
  // return (
  //   <>
  //     <Box sx={{display:'flex',flexWrap:"wrap",justifyContent:'center'}}>
  //     {
        
  //       CartItems.map((menu,index)=>{
  //         return (
  //         <Card sx={{maxWidth:'390px',display:'flex',m:2}}>
  //           <CardActionArea>
  //             <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name} />
  //             <CardContent>
  //               <Typography variant="h5" gutterBottom component={"div"}>
  //                 {menu.name}

  //               </Typography>
                
  //               <Typography variant="body3">Price:{menu.price}$</Typography><br />
  //               <Typography variant="body3">Item Total:{menu.price*menu.itemQuantity}$</Typography><br />

  //               <button onClick={()=>{
  //                 dispatch( IncreaseQty(menu.id))
  //               }}>+</button>Qty-{menu.itemQuantity}<button onClick={()=>{
  //                 dispatch( DecreaseQty(menu.id))
  //               }}>-</button><br />
  //               <button onClick={()=>{
  //               //  console.log(index)
  //                 dispatch(removeFromCart(index))

  //               }}>Remove From Cart</button>
               
  //             </CardContent>
  //           </CardActionArea>
  //         </Card>
  //        ) }  )
  //     }
  //    </Box>
 
  //   </>
  // )
)
}


export default Cart
