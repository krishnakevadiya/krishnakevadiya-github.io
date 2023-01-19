import { Box,  Button,  Flex,  Image, SimpleGrid, Text } from "@chakra-ui/react"
import mypic from "../img/mypic.jpg"
import { toggleClick } from "../Toggle/ToggleClick"
import {
    AiFillGithub,
    
    AiFillLinkedin,
    AiFillMail,
   
   
  } from "react-icons/ai";
  

import fontStyle from "./fontStyle"
import resume from "../pdf/Krishna_Kevadiya_Resume.pdf"

 const Home = () => {
    
    
    return (
      <>
     
        <Box id="home" mt="70px"  border={"0px solid red"}>
        <SimpleGrid columns={[1,1,2]} gap={["0%","3%"]}>
            <Box color="gray">
                <Text color="gray" style={fontStyle}  fontSize={["1px","20px","25px","30px","35px"]} >Hello world!</Text>
                <Text fontSize={["xl","2xl","3xl"]}>Hi 👋, I'm Krishna Kevadiya</Text>
                <Text  fontSize="2xl">"Full Stack Web Developer"</Text>
               
           
               
                <Flex mt="20px" ml="40%" flexDirection={["row"]} >
                   
     
          <a href="https://www.linkedin.com/in/krishna-kevadiya-b5a6661ba/" target={"blank"}  >
            <AiFillLinkedin size="44px" />
          </a>
          <a href="krishnakevadiya32@gmail.com" target={"blank"}  >
            <AiFillMail size="44px" />
          </a>
          
          <a href="https://github.com/krishnakevadiya" target={"blank"}>
            <AiFillGithub size="38px"/>
          </a>
          
       
                </Flex>
                <Flex align="center" mt="3px" flexDirection={["column","row"]} ml={["4%","30%"]}  mb="10%">
                
                <Button onClick={()=>toggleClick("hireme")} bgColor="gray" m="5%" color="black" style= {{border:"1px solid #3AF807"}} >Hire Me</Button>
                   
                <a target="_blank" rel="norefeer" href={resume} download="krishna_kevadiya_Resume.pdf" >
               <Button  color="black"  m="5%" bgColor="gray" style= {{border:"1px solid #3AF807"}}>Get CV</Button> </a>
                </Flex>
            </Box>
            
            <Box ml={["12%","25%","30%"]}>
                
            
                <Image h="100%"  src={mypic}  style={{borderRadius:"50%",height:"300px", border:"1px solid #3AF807"}} ></Image>
                
            </Box>
            <Flex/>
        </SimpleGrid>
    </Box>
   
    

    </>
    )
}
export default Home;