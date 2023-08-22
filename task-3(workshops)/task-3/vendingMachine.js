var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');


module.exports = {
  canAfford: function(amount){
    if(!this.isValidAmount(amount)){
      errorMessage = "Invalid Input";
    }
    if(errorMessage){
      throw new Error(errorMessage);
    }
    return amount <= balance;
  },




  insertCoin: function(coinType){
    var value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },

  
  releaseChange: function(){
    var currentBalance = balanceManager.getBalance();
    balanceManager.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  },

  vendProduct: function(productId){
    var product = productInventory.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  },
  getProducts: function() { 
    return productInventory.getProduct;
  },

  convertToChange: (amount) => {
    const coinValues = {
      'q': 25,
      'd': 10,
      'n': 5,
      'p': 1,
    };
    const coins = ['q', 'd', 'n', 'p']
    const result = []

    for (const coin of coins) {
      while (amount >= coinValues[coin]) {
          amount -= coinValues[coin];
          result.push(coin);
      }
  }

  return result;
  }


};
