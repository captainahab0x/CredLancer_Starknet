import { BrowserRouter, Routes, Route} from "react-router-dom";
import LancerProfile from "../LancerProfile/LancerProfile";
import Home from "../Homepage/Home";
import ConnectWallet from "../ConnectWallet/ConnectWallet"

const Page = () => {
  return (
    <div className="main">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ConnectWallet" element={<ConnectWallet/>}/>
        <Route path="/LancerProfile" element={<LancerProfile/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Page
