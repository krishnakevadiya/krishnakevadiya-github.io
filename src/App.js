
import './App.css';
import { Box } from '@chakra-ui/react';
import AllRoutes from "./Routes/AllRoutes"
function App() {
  return (
    <Box bgColor={"black"} style={{margin:"0px",padding:"0px",boxSizing:"border-box",width:"100%",textAlign:"center" }} w="100%"  className="App">
    <AllRoutes/>
  </Box>
  );
}

export default App;
