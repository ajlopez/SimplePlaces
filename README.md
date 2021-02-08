# SimplePlaces

Simple Places (parcels, towns, forests, etc) for Ethereum and RSK blockchains (WIP).

## References

- [Solidity - Arrays](https://www.tutorialspoint.com/solidity/solidity_arrays.htm)

## Requirements

- There are places
- There are items
- There is a token used to pay for place creation and items
- A place has a number of subplaces
- That number is determined at construction time
- A place has places by position
- A place has a list of places, each list identified by name
- A place has a creator and an owner
- A place can be put into or removed from another place 
only by the containter place creator
- An owner should pay in tokens the creation of a place
- There are leaf places: places that have no more places inside
- A place has string, integer and bytes properties by name
- Those properties can be set only by the place creator
- The render of a place is the responsability of the dapp
- Each user is assigned an initial number of tokens
- The tokens can be exchange by RBTC using a liquidity pool
- A place could be represented by a non-fungible token

## License

MIT

