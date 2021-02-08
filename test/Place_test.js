const Place = artifacts.require("Place");

contract("Place", function (accounts) {
    const alice = accounts[0];
    
    const NCOLS = 16;
    const NROWS = 16;
    
    let place;
    
    beforeEach(async function () {
        place = await Place.new(NROWS * NCOLS);
    });
    
    it('number of places', async function () {
        const noplaces = Number(await place.noPlaces());
        
        assert.equal(noplaces, NROWS * NCOLS);
    });
});