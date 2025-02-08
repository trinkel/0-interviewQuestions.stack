# Interview question of the week

## This week's question:

Make a translation function for the [NATO phonetic alphabet](https://en.wikipedia.org/wiki/NATO_phonetic_alphabet?utm_source=cassidoo&utm_medium=email&utm_campaign=believe-in-the-power-of-your-own-voice-al-gore). Extra credit: Get creative with the variants!

Example:

```js
natoify('hello world');
('Hotel Echo Lima Lima Oscar (space) Whiskey Oscar Romeo Lima Delta');

natoify('3spooky5me');
('Three Sierra Papa Oscar Oscar Kilo Yankee Five Mike Echo');
```

(you can submit your answers by replying to this email with a link to your solution, or share on Bluesky, Twitter, LinkedIn, or Mastodon)

## Research

**Convert accented characters to latin characters**

[Stack Overflow: Remove accents/diacritics in a string in JavaScript](https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/37511463#37511463)

```js
const str = 'Crème Brûlée';
str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
```
