import { useEffect,useContext,createContext } from "react";
import PropTypes from "prop-types";
import { WalletContext } from "../components/Wallet";
import Navigation from "../components/Navigation";

const AccountList=({saveAccount})=>{
  const {web3}=useContext(WalletContext);
//  from 9 to 22 a list of account is being created
// by fetching id selectnumber from the form in the end
  useEffect(() => {
      const allAccounts = async () => {
        var select = document.getElementById("selectNumber");
        //array of accounts available in ganache
        var options = await web3.eth.getAccounts();
        // created list or fetching accounts 
        // from ganache using line 16 to 23
        
        for (var i = 0; i < options.length; i++) {
          var opt = options[i];
          var el = document.createElement("option");
          el.textContent = opt;
          el.value = opt;
          select.appendChild(el);
        }
        console.log(options);
      };
      
      web3 && allAccounts();
    }, [web3]);
  
    //passing the account chose 
    // from the options and sending them as a argument
    const selectAccount = async () => {
      let selectedAccountAddress = document.getElementById("selectNumber").value;
  
      if (
        selectedAccountAddress &&
        selectedAccountAddress !== "Choose an account"
      ) {
   
        saveAccount(selectedAccountAddress);
      }
  };
  return(
   <>
     <Navigation/>
    
    <form className="label0" id="myForm">
      <label htmlFor="">Choose an account</label>
      <select className="innerBox" id="selectNumber" onChange={selectAccount}>
        <option></option>
      </select>
    </form>
    </>
  )
};
// in line number 45 we are creating multiple using for loop above
AccountList.propTypes = {
  saveAccount: PropTypes.node.isRequired,
};
export default AccountList;