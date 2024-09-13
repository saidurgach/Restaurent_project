
import React from 'react'
import{MenuList} from '../data/Data'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { addTOFoodCart } from './Reducer'
import { useDispatch,useSelector } from 'react-redux'




const Menu = () => {
  const foodId=useSelector((state)=>{
    return state.CartItems

  })
  const dispatch=useDispatch()
  return (
    <>
   
     <Box sx={{display:'flex',flexWrap:"wrap",justifyContent:'center'}}>
      {
        MenuList.map(menu=>(
          <Card sx={{maxWidth:'390px',display:'flex',m:2}}>
            <CardActionArea>
              <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name} />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}

                </Typography>
                <Typography variant="body2">{menu.Description}</Typography>
                <Typography variant="body3">Price:{menu.Price}$</Typography><br />
                {foodId.find(item=>item.id===menu.id)? <button>Added To Cart</button>: <button onClick={()=>{let item={
                  id:menu.id,
                  image:menu.image,
                  name:menu.name,
                  price:menu.Price,
                  itemQuantity:1

                }
                dispatch(addTOFoodCart(item))
                }}>Add To Cart</button>}
               
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      }
     </Box>
      </>
  )
}

export default Menu
