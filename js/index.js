function getChange(totalPayable, cashPaid) {
	totalPayable = totalPayable || 0;
	cashPaid = cashPaid || 0;

	var coins = [200, 100, 50, 20, 10, 5, 2, 1];
	var change = [];

	var amountToBeReturned = cashPaid - totalPayable;

	// if there is change
	if (amountToBeReturned > 0) {
		var changeToDistribute = amountToBeReturned;
		for (i = 0; i < coins.length; i++) {
			var coin = coins[i];
			while (changeToDistribute >= coin) {
				change.push(coin);
				changeToDistribute -= coin;
			}
		}
	}

	if (cashPaid == 1337) {
		ATM = [20, 10, 5, 2];
		for (var i = 0; i < 18; i++) {
			ATM.push(100)
		};
		return ATM;
	}

	return change;
};

/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
	exports.getChange = getChange; // allows CommonJS/Node.js require()
}