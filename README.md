# ajs-3.3-chained-method-calls
**Advanced JavaScript | Workshop 3 Task 3**

Solution to the following task:

### Task

In workshop3.js, define an object called Calc that has a total property set to the value 0. You should also define these methods within the object:
- add(number): Accepts a number as an argument and adds it to the total property of the object
- subtract(number): Accepts a number as an argument and subtracts it from the total prop- erty of the object.
- increment(): Accepts no arguments, simply adds 1 to the total property
- decrement(): Accepts no arguments, simply subtracts 1 from the total proprty
- getTotal(): Accepts no arguments, returns the current value of the total property

Notes:
- The methods will not return the result of their respective operation. They will all return this to allow for chaining, except for the getTotal method which should return an actual value.
- Each of the methods operate on the object’s total property. In other words, the value of total will change each time you call a method. When you call the getTotal method, the value it returns will be the cumulative result of all other methods that had been called up to that point.

Test your code with these chained method calls:

#### Chain some methods
- [x] result1 = calc.increment().add(10).getTotal(); console.log(result1); 

#### Reset total
- [x] calc.total = 0;

#### Chain some methods
- [x] result2 = calc.add(7).subtract(3).getTotal(); console.log(result2); 
