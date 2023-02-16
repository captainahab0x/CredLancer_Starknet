import React from "react";
import { Link } from "react-router-dom";
import  "./header.css";
import ConnectWallet from "../../ConnectWallet/ConnectWallet"

const   Header = () => {
    return (
        <>
          <header>
            <div className='container flex test'>
              <div className='logo'>
                <img src='./Images/LogoCC.svg' alt='' />
              </div>
              <div className="Search">
                .
                <input type="text" placeholder="Search"/>
                #
              </div>
                <div className='button testt'>
                <Link to={"ConnectWallet"}><button className='btn1'>Join us</button></Link>
              </div>
            </div>
          </header>
        </>
      )
    }
    
export default Header
