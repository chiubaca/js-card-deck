![Published to NPM](https://github.com/chiubaca/js-card-deck/workflows/Publish%20to%20NPM/badge.svg)
![Unit Tests](https://github.com/chiubaca/js-card-deck/workflows/Unit%20Tests/badge.svg)

# Javascript Playing Cards ♦️♣️♥️♠️

A js library to interact with a virtual deck of cards in following data structure:

<details>

```json
[
  { "value": 2, "suit": "Diamonds" },
  { "value": 3, "suit": "Diamonds" },
  { "value": 4, "suit": "Diamonds" },
  { "value": 5, "suit": "Diamonds" },
  { "value": 6, "suit": "Diamonds" },
  { "value": 7, "suit": "Diamonds" },
  { "value": 8, "suit": "Diamonds" },
  { "value": 9, "suit": "Diamonds" },
  { "value": 10, "suit": "Diamonds" },
  { "value": "Jack", "suit": "Diamonds" },
  { "value": "Queen", "suit": "Diamonds" },
  { "value": "King", "suit": "Diamonds" },
  { "value": "Ace", "suit": "Diamonds" },
  { "value": 2, "suit": "Clubs" },
  { "value": 3, "suit": "Clubs" },
  { "value": 4, "suit": "Clubs" },
  { "value": 5, "suit": "Clubs" },
  { "value": 6, "suit": "Clubs" },
  { "value": 7, "suit": "Clubs" },
  { "value": 8, "suit": "Clubs" },
  { "value": 9, "suit": "Clubs" },
  { "value": 10, "suit": "Clubs" },
  { "value": "Jack", "suit": "Clubs" },
  { "value": "Queen", "suit": "Clubs" },
  { "value": "King", "suit": "Clubs" },
  { "value": "Ace", "suit": "Clubs" },
  { "value": 2, "suit": "Hearts" },
  { "value": 3, "suit": "Hearts" },
  { "value": 4, "suit": "Hearts" },
  { "value": 5, "suit": "Hearts" },
  { "value": 6, "suit": "Hearts" },
  { "value": 7, "suit": "Hearts" },
  { "value": 8, "suit": "Hearts" },
  { "value": 9, "suit": "Hearts" },
  { "value": 10, "suit": "Hearts" },
  { "value": "Jack", "suit": "Hearts" },
  { "value": "Queen", "suit": "Hearts" },
  { "value": "King", "suit": "Hearts" },
  { "value": "Ace", "suit": "Hearts" },
  { "value": 2, "suit": "Spades" },
  { "value": 3, "suit": "Spades" },
  { "value": 4, "suit": "Spades" },
  { "value": 5, "suit": "Spades" },
  { "value": 6, "suit": "Spades" },
  { "value": 7, "suit": "Spades" },
  { "value": 8, "suit": "Spades" },
  { "value": 9, "suit": "Spades" },
  { "value": 10, "suit": "Spades" },
  { "value": "Jack", "suit": "Spades" },
  { "value": "Queen", "suit": "Spades" },
  { "value": "King", "suit": "Spades" },
  { "value": "Ace", "suit": "Spades" }
]
```
</details>

## Installation
```
npm i js-card-deck
```

## Usage

In Node.js
```js
let { Deck } = require("js-card-deck")

let deck = new Deck() 
```

## Properties 

### `showDeck`
Return the array of cards in it's current state
```js
deck.showDeck
```

### `showTopCard`
Returns the card object at index 0
```js
deck.showTopCard 
```

### `showBottomCard`
Returns the card object at index 51 
```js
deck.showTopCard 
```

## Methods

### `shuffleDeck()`
Shuffles the array of card object then returns the array in it's new shuffled state
```js
deck.shuffleDeck()
```

### `showTopCardPlaceToBottom()`
Returns the current card object at index position 0, then moves this to index position 51
```js
deck.showTopCardPlaceToBottom()
```

### `showBottomCardPlaceToTop()`
Returns the current card object at index position 51, then moves this to index position 1
```js
deck.showBottomCardPlaceToTop()

```
