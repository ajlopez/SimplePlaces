// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

contract Place {
    address[] public places;
    
    constructor(uint nplaces) public {
        places = new address[](nplaces);
    }
    
    function noPlaces() public view returns (uint) {
        return places.length;
    }
    
    function getPlaces() public view returns (address[] memory) {
        return places;
    }
}

