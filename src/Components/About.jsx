import React from 'react'
import { Box,  Button,  Center,  Flex,  Image, SimpleGrid, Text } from "@chakra-ui/react"
import gif from "../img/gif.png"
const about = () => {
  return (
    <div >
        <Text style={{color:"gray",
    fontSize:"40px",
    fontWeight:"bold",
    textDecoration: "0.5px  underline"}} >About</Text>
       <Flex id='about' flexDirection={["column-reverse","row"]} m="2%" color="gray" border={"0px solid red"} >
       <Box ml={["2%","5%","10%"]} alignItems={["Center"]} >
                <Image h="90%"  src={gif}  style={{borderRadius:"50%",height:"280px" ,width:"380px" }} ></Image>
        </Box>
        <Box w={["90%","70%"]} mt="8%" mr={["0%","5%","8%"]} textAlign={["Center"]} m={["5%"]} style={{fontSize:"20px"}}>
          A full stack web developer having knowledge in Data Structure, Algorithms, and Programming languages. Knowing JavaScript, HTML, CSS, React, Redux, Mern Stack, MongoDB and Chakra UI, I have made some solo and collaborative projects and continue to have some experience as well as acquiring more knowledge. Now I'm looking forward to enhance my skills in a challenging work environment.
        </Box>
       </Flex>
      
    </div>
  )
}

export default about