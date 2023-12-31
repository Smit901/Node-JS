let balance = 0;    

module.exports = {
    increaseBalance: function(amount){
      balance += amount;
    },
    getBalance: function(){ 
      return balance;
    },
    canAfford: function(amount){
      return amount <= balance;
    },
    decreaseBalance: function(amount){
      if(!this.canAfford(amount)){
        throw new Error('Insufficient balance');
      }
      balance -= amount;
    },
    isValidAmount: function(amount){
      if(amount === null || amount === undefined){
        return false;
      } else {
        return true;
      }
    },
  
  };