import { useState, useEffect ,createContext} from "react";
import Web3 from "web3";
import PropTypes from "prop-types";
import ABI from "./ABI.json";
// yeh ek global variable hai for using yeh sara joh neeche likha hai
const WalletContext=createContext();

const Wallet =({children})=>{
    // metamask ka address:0xa673B52A9B298f57Ce053D05bd2E4acB6F9b93DF
    const [state,setState]=useState({
        web3:null,
        contract:null,
    });

    useEffect(()=>{
        const init=async()=>{
            const web3=new Web3("HTTP://127.0.0.1:7545");
            const contractadd="0xa673B52A9B298f57Ce053D05bd2E4acB6F9b93DF";
            // to create contract instance - abi, address
            const contract =new web3.eth.Contract(ABI,contractadd);
            console.log(contract);
        }
        init()
        // [] this is to empty the dependency
    },[])
// job bhi iss wallet ke around wrap around hoga 
// woh children ki form mei aa jayega
// aur uske pass state pohnch jayega kyuki
// hmne value state send ki hai
    return (
        <WalletContext.Provider value ={state}>
            {children}
        </WalletContext.Provider>
    );
};
Wallet.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Wallet;
export {WalletContext};