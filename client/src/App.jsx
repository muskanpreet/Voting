// after nom install react-router-dom
// import
// import { useState } from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import AccountList from "./pages/AccountList";
// import CandidateDisplay from "./pages/CandidateDisplay";
import CandidateRegister from "./pages/CandidateRegister";
// import ConnectedAccount from "./pages/ConnectedAccount";
import ElectionCommision from "./pages/ElectionCommision";
// import Vote from "./pages/Vote";
// import VoterDisplay from "./pages/VoterDisplay";
import VoterRegister from "./pages/VoterRegister";

import { useState } from 'react';
import './App.css';
import Wallet from './components/Wallet';
//for making multi page application in react install
// npm install react-router-dom
function App() {
 const [account,setAccount]=useState("");
  const saveAccount=(address)=>{
    setAccount(address);
  }
  // ismei hm apni list de denge
  // /telling path
  // register aur display ke liye 
  // same he page use kr rahe hain
  const router=createBrowserRouter([
    // kyuki hmara home page mei account list ka he element hai toh navigation hmne waha import krli
    {path:"/",element:<AccountList saveAccount={saveAccount} />},
    // {path:"/candidate",element:<CandidateDisplay></CandidateDisplay>},
    {path:"/candidate",element:<CandidateRegister account={account}/>},
    {path:"/electioncommision",element:<ElectionCommision account={account} />},
    {path:"/voter",element:<VoterRegister account={account} />},

  ])

  const seveAccount =(address) =>{
    setAccount(address);
  }
  // isko wrap krne ka yeh fayeg=da hoga mujhe hr baar as a propt daal ke import 
  // nhi krna parhega, mene already value mei state bhej di hai aur 
  // woh upr wale hr ek ke pass ponch jaygi state
  return (
    <>    
      <Wallet>
      <RouterProvider router={router}></RouterProvider>
      </Wallet>
    </>
  )
}

export default App
