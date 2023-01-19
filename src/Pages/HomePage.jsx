import { Box, Button, Image, Text } from "@chakra-ui/react"
import About from "../Components/About";
import Contact from "../Components/Contect";



import  Home  from "../Components/Home";
import Navbar from "../Components/Navbar"
import Projects from "../Components/Projects.jsx";
import Skills from "../Components/Skills.jsx";


import { toggleClick } from "../Toggle/ToggleClick.js";




const HomePage = () => {
    // Home, about me, skill, project, contact & resume
    return (
    <Box style={{margin:"0px",padding:"0px",boxSizing:"border-box",width:"100%" }}  >
        <Navbar/>
        <Box padding="60px 5%">
        <Home/>
        <Image 
            onClick={()=>toggleClick("home")} 
            src="https://i.pinimg.com/favicons/646ce8493e82083c2e09223f12ad31909fdac723bd713746b0748689.png?d4cc89c76214e5d7ec9037a6815a336f" 
            ml={["78%","93%","97%","99%","100%"]} 
            mt="10px"   
            pos="sticky" 
            top="87%" 
            w="50px" 
            h="50px"
            zIndex="49"
        />
        <About/>
        <Skills/>
        <Projects/>
       <Contact/>

        

        

        </Box>
    </Box>
    )
}

export default HomePage;