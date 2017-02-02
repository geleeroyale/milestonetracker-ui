import Web3 from "web3";
import MilestoneTracker from "milestonetracker";
import GivethDirectory from "givethDirectory";

let web3;
if ((window) && (window.web3)) {
    web3 = new Web3(window.web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

// const givethDirectory = new GivethDirectory(web3, "0x30e1a463ecf25dbba2f83cb3e4b10045f888e55b");
const givethDirectory = new GivethDirectory(web3, "0xd833215cbcc3f914bd1c9ece3ee7bf8b14f841bb");

export { web3, MilestoneTracker, givethDirectory };