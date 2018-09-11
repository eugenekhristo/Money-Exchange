// PLEASE DON'T change function name
module.exports = function makeExchange(money) {
  if (money < 1) return {};
  if (money > 10000)
    return {
      error: "You are rich, my friend! We don't have so much coins for exchange"
    };

  const result = {};

  const incrementSymbol = symbol => {
    if (!result[symbol]) result[symbol] = 1;
    else result[symbol]++;
  };

  while (money > 0) {
    if (money >= 50) {
      incrementSymbol('H');
      money -= 50;
    } else if (money >= 25) {
      incrementSymbol('Q');
      money -= 25;
    } else if (money >= 10) {
      incrementSymbol('D');
      money -= 10;
    } else if (money >= 5) {
      incrementSymbol('N');
      money -= 5;
    } else {
      incrementSymbol('P');
      money -= 1;
    }
  }

  return result;
};
