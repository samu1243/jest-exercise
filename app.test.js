test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
});

test("One Yen should be 106.58 yen", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(4)).toBe(426.33333333333337);
});
test("One Yen should be 0.0062458 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(100)).toBe(0.6254886630179828);
});