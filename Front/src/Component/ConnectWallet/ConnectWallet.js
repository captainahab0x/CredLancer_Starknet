//import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import Header from "../Commun/Header/header";
import Footer from "../Commun/Footer/footer";
import "./ConnectWallet.css"
//import { Link } from "react-router-dom";

const	ConnectWallet = () => {
	return (
		<>
		<Header/>
		<div className="bgd">
			<div className="container_main">
				<div className="rectangle2">
					<div className="title2"></div>
				</div>
				<div className="rectangle1">
					<div className="title">
						<h1>Connect your wallet</h1>
					</div>
					<div className="rectangle3">
						<h1 id="welcome">Welcome to Credlancer</h1>
						<button id="discord">import from discord</button>
					</div>
				</div>
			</div>
		</div>
		<div className="Footer1">
			<Footer/>
		</div>
		</>
		)
	}

export default ConnectWallet
