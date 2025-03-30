const islatePurchase = require("./IslatePurchase");

const timeAlert = () => {
    const run = () => {
        islatePurchase()
    };

    const targetTime = new Date();
    targetTime.setHours(0, 0, 0, 0);

    if (new Date() > targetTime) {
        targetTime.setDate(targetTime.getDate() + 1);
    }

    const remainingTime = targetTime - new Date();
    setTimeout(run, remainingTime);
}


module.exports = timeAlert;