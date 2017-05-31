
/**
 * The "result" variable is used later on, when object methods are called.
 * The Calc variable holds the calculator object.
 * The total is stored as a property of the object, so the methods can
 * access it via "this.total".
 * Each method simply changes the "value" property, and then
 * returns a reference to the entire object (i.e. "this"), which allows
 * the method calls to be chained.
 * The exception is "getTotal", which returns the value of "total" (which is a number), so can't
 * return "this", and therefore, can't be chained.
 */

var result,
    calc = {
        // No need for VAR total. Also, write total: 0, not total = 0.
        // As we're setting total property with value of 0
        total: 0,
        add: function (number) {
            this.total = this.total + number; // This on the left side, as per formula. Situate the total by including this on the right side too.
            return this; //Return this according to the formula.
        },
        subtract: function (number) {
            this.total = this.total - number;
            return this;
        },
        increment: function () {
            this.total = this.total + 1;
            return this;
        },
        decrement: function () {
            this.total = this.total - 1;
            return this;
        },
        getTotal: function () {
            return this.total;
        }
    };

// Do some maths...
// No need for result1 and result2. Just have one var result which you will reset below.
// And note your var result in the var section, it will get hoisted anyway
result = calc.increment().add(10).getTotal();
console.log(result); // 11

// Reset the total... if we don't, it will contain the result of previous calculations
calc.total = 0;

// Do more maths...
result = calc.increment().add(10).add(100).subtract(5).decrement().getTotal();
console.log(result); // 105
