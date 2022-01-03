import React from "react";
import heart from "../images/heart.jpg";

const Header = () => {
    return (
        <div className="ui fixed menu">
            <div className="ui container center"  style={{marginTop:"26px"}}>
                <h1 style={{color:"black", paddingLeft:"280px"}}>Heart Disease Database Management and Analysis </h1>
            </div>
            <img className="ui avatar image" src={heart}
            style={{marginTop:"14px",marginBottom:"14px",marginRight:"14px", float:"right", fontSize:28}}
            ></img>
        </div>
    );
}

export default Header;