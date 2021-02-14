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
    
    function getPlacesRange(uint from, uint size) public view returns (address[] memory range) {
        range = new address[](size);
        
        for (uint k = 0; k < size; k++)
            range[k] = places[k + from];
    }
    
    function putPlace(uint position, address place) public {
        places[position] = place;
    }
}

