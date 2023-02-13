import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "../Commun/Header/header";
import Footer from "../Commun/Footer/footer";
import Home from "../Homepage/Home";
import ConnectWallet from "../ConnectWallet/ConnectWallet"

const Page = () => {
  return (
    <div className="main">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Footer" element={<Footer/>}/>
        <Route path="/Header" element={<Header/>}/>
        <Route path="/ConnectWallet" element={<ConnectWallet/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Page