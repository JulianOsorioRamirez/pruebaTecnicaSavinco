import { Routes, Route } from "react-router-dom";
import Page from "../components/page1/Page1";


function Main(props) {
    return (
      <div>
        <Routes>
       <Route path="/" element={<Page/>} />
        
        </Routes>
      </div>
    );
  }
  
  export default Main;