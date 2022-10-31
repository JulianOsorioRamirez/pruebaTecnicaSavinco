import "./Body.css";
import qMobile from "../../assets/images/Qmobile.png"

function Principal() {
  return (
    
      <div className="principal">
        <div className="textContainer">
        <div className="textDiv">
          <p className="textContent">
            One of the major impediments to the development of people living in
            poverty is their <span>LACK OF SAVINGS</span>. This deficiency leads to strong
            DEPENDENCIES and permanent <span>VULNERABILITY</span>. But, can people leaving in
            poverty really save money up to a point where they become
            financially independent?.
          </p>
        </div>
        <div className="textDiv">
        <p className="textContent">
            One of the major impediments to the development of people living in
            poverty is their <span>LACK OF SAVINGS</span>. This deficiency leads to strong
           <span>DEPENDENCIES</span>  and permanent <span>VULNERABILITY</span>. But, can people leaving in
            poverty really save money up to a point where they become
            financially independent?.
          </p>
        </div>
        </div>
        
        <div className="qMobileDiv">
        <img className="qMobileImg" src={qMobile}/>
        </div>
      </div>
    
  );
}

export default Principal;
