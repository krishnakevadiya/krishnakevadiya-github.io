import { Box, Flex, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react"
import GitHubCalendar from "react-github-calendar"






const Skills = () => {


    return (
      <Box  id="skills" ml={"10%"} mr={"10%"} >
      <Text style={{color:"gray",
    fontSize:"40px",
    fontWeight:"bold",
    textDecoration: "0.5px  underline"}} >Skills</Text>
      <Box>
    <Text align="center" style={{ color:"gray",
    fontSize:"30px",
    fontWeight:"bold"}} >Frontend</Text>
      <SimpleGrid columns={[2,3,4,5,8]} gap="4%">
      <img style={{border:"1px solid gray"}} src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" align="center" alt="html5"/>
      <img style={{border:"1px solid gray"}} src = "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" align="center" alt="css3"/>
      <img style={{border:"1px solid gray"}} src ="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" align="center" alt="javascript"/>
      <img style={{border:"1px solid gray"}} src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"  align="center" alt="reactjs" />
      <img style={{border:"1px solid gray"}} src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"  align="center" alt="redux" />
      <img style={{border:"1px solid gray"}} src="https://img.shields.io/badge/DOM-007FFF?style=for-the-badge&logo=DOM&logoColor=white"  align="center" alt="material-ui"/>
      <img style={{border:"1px solid gray"}} src = "https://img.shields.io/badge/chakra ui-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white" align="center" alt="chakra-ui"/>
      <img style={{border:"1px solid gray"}} src="https://img.shields.io/badge/rest api-%23000000.svg?style=for-the-badge&logo=flask&logoColor=white" align="center" alt="restapi"/>
        
      </SimpleGrid>
       <br/>
       <Text align="center" style={{ color:"gray",
    fontSize:"30px",
    fontWeight:"bold"}} >Backend</Text>
       <SimpleGrid columns={[2,2,4,4,4]} gap="4%">
      <img style={{border:"1px solid gray"}} src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" align="center" alt="nodejs" />
      <img style={{border:"1px solid gray"}} src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" align="center" alt="expressjs"/>
      <img style={{border:"1px solid gray"}} src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" align="center" alt="mongodb"/>
      <img style={{border:"1px solid gray"}} src="https://img.shields.io/badge/mongoose-%2300f.svg?style=for-the-badge&logo=fastify&logoColor=white" align="center" alt="mongoose"/>
       </SimpleGrid>
       <br/>
      <Text align="center" style={{ color:"gray",
    fontSize:"30px",
    fontWeight:"bold"}} >Tools</Text>
        
       <SimpleGrid columns={[2,3,4,5,8]} gap="4%" >
         <img style={{border:"1px solid gray"}} src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" align="center" alt="git"/>
         <img style={{border:"1px solid gray"}} src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" align="center" alt="git"/>
         <img style={{border:"1px solid gray"}} src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=whit" align="center" alt="git"/>
      <img style={{border:"1px solid gray"}} src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"  align="center" alt="github"/>
      <img style={{border:"1px solid gray"}} src ="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" align="center" alt="postman"/>
      <img style={{border:"1px solid gray"}} src = "https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" align="center" alt="npm"/>
         <img style={{border:"1px solid gray"}} src="https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white"  align="center" alt="vscode"/>
         <img style={{border:"1px solid gray"}} src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" align="center" alt="slack"/>
       </SimpleGrid>
       <Image mt="35px" mb={"5%"} src="https://user-images.githubusercontent.com/82999542/132934744-131c1891-4a4f-4e88-a64a-36720ad7470b.png" alt="hi"/>
    <Box color={"white"}>  
    <GitHubCalendar
    username="krishnakevadiya"
    blockSize={15}
    blockMargin={5}
    color={"grey"}
    fontSize={15}
></GitHubCalendar>
</Box>
      
      </Box>
      </Box>
    )
}


export default Skills;