import React from "react";
import  "./header.css"

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
                <button className='btn1'>Join us
                </button>
              </div>
            </div>
          </header>
        </>
      )
    }
    
export default Header
