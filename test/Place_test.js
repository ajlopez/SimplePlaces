const Place = artifacts.require("Place");

contract("Place", function (accounts) {
    const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
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
    
    it('get places', async function () {
        const places = await place.getPlaces();
        
        assert.ok(places);
        assert.equal(places.length, NROWS * NCOLS);
        
        for (k = 0; k < NROWS * NCOLS; k++)
            assert.equal(places[k], ZERO_ADDRESS);
    });
    
    it('get places range', async function () {
        const places = await place.getPlacesRange(NCOLS, NCOLS);
        
        assert.ok(places);
        assert.equal(places.length, NCOLS);
        
        for (k = 0; k < NROWS; k++)
            assert.equal(places[k], ZERO_ADDRESS);
    });
    
    it('put place', async function () {
        const subplace = await Place.new(42);
        
        place.putPlace(42, subplace.address);
        
        const places = await place.getPlaces();
        
        for (k = 0; k < NROWS * NCOLS; k++)
            if (k == 42)
                assert.equal(places[k], subplace.address);
            else
                assert.equal(places[k], ZERO_ADDRESS);
            
        const result = await place.places(42);
        
        assert.equal(result, subplace.address);
    });
});

