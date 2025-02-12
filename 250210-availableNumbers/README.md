# Interview question of the week

## This week's question:

[Given the current system of NFL uniform numbers](https://en.m.wikipedia.org/wiki/NFL_uniform_numbers?utm_source=cassidoo&utm_medium=email&utm_campaign=the-world-is-a-museum-of-other-peoples-passion#Current_system), a given player's position, and an array of existing numbers on the team, write a function that returns a list of numbers that the given player can choose from for their uniform.

Example:

> availableNumbers("QB", [1, 2, 3, 10, 19]) // position:string, otherPlaters: number
> [4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18] // choices: string

## References

### Creating reference arrays

[Spread to `Array.from`](https://dev.to/domhabersack/create-number-ranges-in-javascript-5494#:~:text=To%20get%20a%20range%20of,it%20contain%20only%20even%20numbers.)

[`Array.from` function](https://www.freecodecamp.org/news/javascript-range-create-an-array-of-numbers-with-the-from-method/)

### Difference between arrays

[Array intersection, difference, and union in ES6](https://medium.com/@alvaro.saburido/set-theory-for-arrays-in-es6-eb2f20a61848)

```js
let difference = arrA.filter(x => !arrB.includes(x));
```