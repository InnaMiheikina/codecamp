const bicycle = {
    gear: 2,
    setGear(newGear){ //by removing the "function"
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);