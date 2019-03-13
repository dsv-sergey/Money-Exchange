// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let change = {};
    const coins = {
        "H": 50,
        "Q": 25,
        "D": 10,
        "N": 5,
        "P": 1
    };

    if (currency > 10000) {
        change.error = "You are rich, my friend! We don't have so much coins for exchange";
    } else if (currency > 0) {
        for (const key in coins) {
            if (currency >= coins[key]) {
                change[key] = Math.floor(currency / coins[key]);
                currency -= change[key] * coins[key];
            }
        }

    }
    return change;
}
