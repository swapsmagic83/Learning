
it('should calculate the monthly rate correctly', function () {
  let values= {
    amount: 10000,
    year:4,
    rate:2.5
  }
  expect(calculateMonthlyPayment(values)).toEqual('219.14')
});


it("should return a result with 2 decimal places", function() {
  // ..
  let values= {
    amount: 10500,
    year:3,
    rate:2.5
  }
  expect(calculateMonthlyPayment(values)).toEqual('303.04')
});

/// etc
