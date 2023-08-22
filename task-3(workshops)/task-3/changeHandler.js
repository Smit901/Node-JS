// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter

var coins = {
  q: 25,
  d: 10,
  n: 5,
  p: 1,
};

var coinsByAmount = ["q", "d", "n", "p"];

module.exports = {
  getAmount:function(coinType) {
    if (coinType === "p") {
      return 1;
    } else if (coinType === "n") {
      return 5;
    } else if (coinType === "d") {
      return 10;
    } else if (coinType === "q") {
      return 25;
    } else {
      throw new Error("Unrecognized coin " + coinType);
    }
  },
  convertToChange: function (amount) {
    var change = [];
    for (var i in coinsByAmount) {
      var coinType = coinsByAmount[i];
      var coinValue = coins[coinType];

      while (amount >= coinValue) {
        change.push(coinType);
        amount -= coinValue;
      }
    }
    return change;
  },
};
