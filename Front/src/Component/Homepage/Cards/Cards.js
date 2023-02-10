import react from "react";
import { useState } from "react";
import { cards } from "../../Data/Data";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import "./cards.css"

const Cards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex1, setCurrentIndex1] = useState(1);
    const [currentIndex2, setCurrentIndex2] = useState(2);

    const handleNext = () => {
      setCurrentIndex((currentIndex + 1) % cards.length);
      setCurrentIndex1((currentIndex1 + 1) % cards.length);
      setCurrentIndex2((currentIndex2 + 1) % cards.length);

    };
  
    const handlePrev = () => {
      setCurrentIndex(
        (currentIndex + cards.length - 1) % cards.length
      );
      setCurrentIndex1((currentIndex1 + cards.length - 1) % cards.length);
      setCurrentIndex2((currentIndex2 + cards.length - 1) % cards.length);
    };
    return (
        <>
        <div className="section">
            <div className="titleCard">
            <p style={{marginBottom:'80PX'}}>CredQuest is a digital reputation network that verifies and authenticates professional accomplishments & skills, not narratives.</p>
            </div>
            <div className="div_bis"  >
                <button  onClick={handleNext} className="fleche">
                <BsChevronLeft className="iconn"/>
                </button>
                    <div className="temoignage">
                        <div className="temoignage_content">
                            <div className="divLogo">
                                <img className='logoCards' src='./Images/LogoCC.svg' alt='' />
                            </div>
                            <div className="CardButton">
                                <div className="subCardButton">
                                    <div className="LogoButton">
                                        <img src='./Images/Picto.svg' alt='' style={{width: '100%', height: 'auto'}}/>
                                    </div>
                                    <div className="titleButton">
                                        <h1 style={{color: '#321975'}}>{cards[currentIndex].text}</h1>
                                    </div>
                                </div>
                          </div>
                            <p>Issued by: {cards[currentIndex].issue}</p>
                            <p>Hours Completed: {cards[currentIndex].hours}</p>
                            <p>Skills: {cards[currentIndex].Skills}</p>
                        </div>
                        <div className="temoignage_content1">
                            <div className="divLogo">
                                <img className='logoCards' src='./Images/LogoCC.svg' alt='' />
                            </div>
                            <div className="CardButton">
                                <div className="subCardButton">
                                    <div className="LogoButton">
                                        <img src='./Images/Picto.svg' alt='' style={{width: '100%', height: 'auto'}}/>
                                    </div>
                                    <div className="titleButton">
                                        <h1 style={{color: '#321975'}}>{cards[currentIndex1].text}</h1>
                                    </div>
                                </div>
                          </div>
                            <p>Issued by: {cards[currentIndex1].issue}</p>
                            <p>Hours Completed: {cards[currentIndex1].hours}</p>
                            <p>Skills: {cards[currentIndex1].Skills}</p>
                        </div>
                        <div className="temoignage_content2">
                        <div className="divLogo">
                                <img className='logoCards' src='./Images/LogoCC.svg' alt='' />
                            </div>
                            <div className="CardButton">
                                <div className="subCardButton">
                                    <div className="LogoButton">
                                        <img src='./Images/Picto.svg' alt='' style={{width: '100%', height: 'auto'}}/>
                                    </div>
                                    <div className="titleButton">
                                        <h1 style={{color: '#321975'}}>{cards[currentIndex2].text}</h1>
                                    </div>
                                </div>
                          </div>
                                <p>Issued by: {cards[currentIndex2].issue}</p>
                                <p>Hours Completed: {cards[currentIndex2].hours}</p>
                                <p>Skills: {cards[currentIndex2].Skills}</p>
                            </div>
                    </div>
                <button onClick={handlePrev} className="fleche">
                    <BsChevronRight className="iconn"/>
                </button>
            </div>
        </div>
        </>
    )
}

export default Cards