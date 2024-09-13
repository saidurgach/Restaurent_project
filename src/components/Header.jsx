import React,{useState} from 'react'
import{ AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import Logo from'../image/logo.svg'
import { NavLink } from 'react-router-dom';
import "../styles/HeaderStyles.css";
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
const Header = () => {
    const{mobileOpen,setMobileOpen}=useState(false)
    // const [anchorElNav, setAnchorElNav]=useState(null)
    let CartItems=useSelector((state)=>{
        return state.CartItems
        console.log(state)

    })
    //handleMenu click
    const handleDrawerToggle=()=>{
        setMobileOpen(!mobileOpen)
    } 
//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//       };
    
     
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

    //menu drawer
    const drawer=(
        <Box onClick={handleDrawerToggle} sx={{textAlign:"center"}}>
            <Typography color={'goldenrod'} variant="h6" component="div" sx={{flexGrow:1}}>
                <img src={Logo} alt="logo" height={'70'} width="200" />
            </Typography>
            <Divider />
                <ul className="mobile-navigation">
                    <li>
                        <NavLink activeClassName="active" to={'/'}> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}> About</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/menu'}> Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'}> Contact</NavLink>
                    </li>
                </ul>
            
        

        </Box>
    )
  return (
    <>
<Box>
    <AppBar component={"nav"} sx={{bgcolor:"black"}}>
        <Toolbar>
            <IconButton color="inherit" aria-label='open-drawer' edge="start"
             sx={{mr:2, display:{sm:"none"},}} onClick={handleDrawerToggle}>
                <MenuIcon /> 
            </IconButton>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton> */}
        <Typography color={'goldenrod'} variant="h6" component="div" sx={{flexGrow:1}}>
        <img src={Logo} alt="logo" height={'70'} width="250" />
            </Typography>
            {/* <Box sx={{display:{xs:"none" ,sm:"block"}}}> */}
                <ul className='navigation-menu'>
                    <li>
                        <NavLink activeClassName="active" to={'/'}> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}> About</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/menu'}> Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/Cart'}> Your Cart-{CartItems.length}</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'}> Contact</NavLink>
                    </li>
                </ul>
            
        </Toolbar>
    </AppBar>
    <Box component="nav">
        
        <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} 
        sx={{display:{xs:'block',sm:'none'},"&.MuiDrawer-paper":{boxSizing:"border-box", width:"240px"}}}>
            {drawer}
        </Drawer>

    </Box>
    <Toolbar />
    </Box>
    </>
  )
}

export default Header
