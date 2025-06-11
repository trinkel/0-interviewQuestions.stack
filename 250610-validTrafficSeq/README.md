# Interview question of the week

## This week's question:

Given an array of strings representing a sequence of traffic light states ("red" for stop, "green" for go, "yellow" for slow), write a function that returns true if the sequence could represent a valid state machine for a standard traffic light. The only valid transitions are: red to green, green to yellow, and yellow to red.

Example:

```ts
isValidTrafficSequence(["red", "green", "yellow", "red", "green"])
// true

isValidTrafficSequence(["red", "yellow", "green"]);
// false

isValidTrafficSequence([])
// true
```

## Comment

A few loops around the light and we're golden.

## Git Repo Permalink

[validTrafficSequence](https://github.com/trinkel/0-interviewQuestions.stack/tree/0c8585f5d233abaef34a64d04eef06e8680c4a01/250610-validTrafficSeq)