import React, {useState} from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './style.css';
import "./MediaQueries.css";
import data from "./TemplateData.json";

function Homescreen({handleClick }) {
  
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
    <div className="mobileview">
    <h1>This Online Store Web App can only be viewed on a laptop. Reload the link on your laptop to interact with the app. 
            Follow the social media pages below to get notified when the mobile version of this web app is deployed.
           <br></br>
            
            <a  href="https://linktr.ee/Carl_Zoel_Kollie"><h6>Link to all CZK Code social Media pages</h6></a>
            </h1>
    </div>
      <div className="templateContainer">
        <div className="nav_grid">
          
        <div className="logohere" >
          <img src="storelogo.jpg" width={90} height={62}/>
         </div>
        <div className="searchInput_Container">
          
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        
        </div>
       
        <section className="sectionone">
             <video src="shopvideo.mp4" muted loop autoPlay/>
      <h1>Shop from the best Online Store.</h1>
    </section>
        <section className="sectiontwo">
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3  >{val.title}</h3>
                      <p className="price">${val.price}</p>
                      <Link to="/pay"> <button>Buy</button> </Link>
                      <br></br>
                      <br></br>
                     
                      <button onClick={()=>handleClick(val)}> Add to Cart</button>
                  </div> 
                )
              })
          }
        </div>
        </section>
      </div>
    </>
  )
}

export default Homescreen;