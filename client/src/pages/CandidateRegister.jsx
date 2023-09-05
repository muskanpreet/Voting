import { useContext } from "react";
import { WalletContext } from "../components/Wallet";
import Navigation from "../components/Navigation"
import PropTypes from "prop-types";


const CandidateRegister=({account})=>{
    // destructuring
    // const {web3,contract}=useContext(WalletContext);
    console.log(account);
    return (<>
    <Navigation></Navigation>
    <p>Hello people2</p>
    </>
    )
    };

CandidateRegister.propTypes = {
        account: PropTypes.node.isRequired,
}
export default CandidateRegister;