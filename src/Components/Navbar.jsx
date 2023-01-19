import { Box, Flex, Spacer, useMediaQuery, IconButton, Button, Text, Divider } from "@chakra-ui/react"
import { toggleClick } from "../Toggle/ToggleClick"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
   
  } from '@chakra-ui/react'

  import {  HamburgerIcon } from '@chakra-ui/icons'


import resume from "../pdf/Krishna_Kevadiya_Resume.pdf"




const Navbar = () => {
    const [navMid] = useMediaQuery('(min-width: 800px)')
   
    const toggleClick2 = () => {
      window.open('https://drive.google.com/file/d/1Q03Rf1oWA6AWhAKyWgo4DjJrmWwOvZVj/view?usp=share_link')
    }

    return (
        <>
        <Flex p="20px 10px" justifyContent="space-around" pos="sticky" zIndex="50" top="0px"   gap='2' bg="black" >
            <Box>
                <Text style={{ fontWeight:"400px",fontFamily:"serif",color:"gray"}} fontSize={["sm","xl","2xl","3xl"]} > <b> krishna..</b></Text>
            </Box>
            <Spacer/>

            <Box >
           { navMid && <Box   display="flex" alignItems='baseline' gap="15px">
                <Button onClick={()=>toggleClick("home")} style={{backgroundColor:"gray",fontFamily:"sans-serif",color:"black",border:"1px solid #3AF807"}}  >Home</Button>
                <Button onClick={()=>toggleClick("about")} style={{backgroundColor:"gray",fontFamily:"sans-serif",color:"black",border:"1px solid #3AF807"}} >About Me</Button>
                <Button onClick={()=>toggleClick("skills")} style={{backgroundColor:"gray" ,fontFamily:"sans-serif",color:"black",border:"1px solid #3AF807"}} >Skills</Button>
                <Button onClick={()=>toggleClick("projects")} style={{backgroundColor:"gray",fontFamily:"sans-serif",color:"black",border:"1px solid #3AF807"}} >Projects</Button>
                <Button onClick={()=>toggleClick("contact")} style={{backgroundColor:"gray",fontFamily:"sans-serif",color:"black",border:"1px solid #3AF807"}} >Contact</Button>
                <a  href={resume} download="krishna_kevadiya_Resume.pdf" > <Button onClick={()=>toggleClick2()} style={{backgroundColor:"gray",fontFamily:"sans-serif",color:"black",border:"1px solid #3AF807"}} >Resume</Button> </a>
            </Box>
            }
            
            { 
            !navMid && <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
               variant='outline'
              />
            <MenuList bg="black">
              <MenuItem onClick={()=>toggleClick("home")} style={{backgroundColor:"gray",fontFamily:"sans-serif",color:"black"}}> Home</MenuItem>
              <MenuItem onClick={()=>toggleClick("about")} style={{backgroundColor:"gray",fontFamily:"sans-serif",color:"black"}} >About Me</MenuItem>
              <MenuItem onClick={()=>toggleClick("skills")} style={{backgroundColor:"gray",fontFamily:"sans-serif",color:"black"}} >skills</MenuItem>
              <MenuItem onClick={()=>toggleClick("projects")} style={{backgroundColor:"gray",fontFamily:"sans-serif",color:"black"}}>Projects</MenuItem>
              <MenuItem onClick={()=>toggleClick("contact")} style={{backgroundColor:"gray",fontFamily:"sans-serif",color:"black"}}> Contact</MenuItem>
              <a  href={resume} download="krishna_kevadiya_Resume.pdf" > <MenuItem onChange={()=>toggleClick2()} style={{backgroundColor:"gray",fontFamily:"sans-serif",color:"black"}}> Resume</MenuItem> </a>
            </MenuList>
          </Menu>
            }   
            </Box>
        </Flex>
        <Divider orientation='horizontal' />
        </>
    )

}

export default Navbar;