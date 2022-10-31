import { Routes, Route } from "react-router-dom";
import Page from "../components/page1/Page1";
import Admin from "./AdminView"


function Main(props) {
    return (
      <div>
        <Routes>
        <Route path="/" element={<Page/>} />
        <Route path="/Admin" element={<Admin/>}/>
        </Routes>
      </div>
    );
  }
  
  export default Main;