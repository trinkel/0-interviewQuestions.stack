# Interview question of the week

## This week's question:

A store is going out of business and will reduce the price of all products by 10% every week leading up to the closing date. Given the closingDate, visitDate, and the originalPrice of a product, write a function that returns the price of the product on the visitDate. You can assume that originalPrice is a positive number.

Example:

```js
calculatePrice('2025-04-01', '2025-03-03', 100); // 4 weeks of discounts
65.61
calculatePrice('2025-04-01', '2025-03-15', 50);  // 2 weeks of discounts
40.5
calculatePrice('2025-04-01', '2025-04-15', 75);  // No discount (visit after closing)
75
```

## Resources
- [Consecutive percentages formula](https://math.stackexchange.com/questions/4159779/formula-for-consecutively-subtracting-a-percentage-n-times)
- [Exponent syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
- [Date Stuff](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)


## The work

I'd like to say the equation has been banging around inside my head just waiting to get out since high school algebra, but that would be a lie.

Temporal will be nice though. It's a bit sad that dealing with date formats for the proof was more work than than figuring out the discount 🤣