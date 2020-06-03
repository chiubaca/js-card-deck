import { Deck } from "./Deck"

test("it should return a deck of cards as an array of objects", () => {
  let deck = new Deck()
  expect(deck.getDeck).toHaveLength(52)
})

test("it should shuffle the array of cards", () => {
  let deck = new Deck()
  deck.shuffledDeck()
  expect(deck.getDeck).toHaveLength(52)
})

test("it should return the first card in the deck", () => {
  let deck = new Deck();
  let topCard = deck.showTopCard();
  expect(topCard).toStrictEqual({
    "suit": "Diamonds",
    "value": 2,
  })
  expect(deck.getDeck).toHaveLength(52)
})

test("it should return the bottom card in the deck", () => {
  let deck = new Deck();
  let bottomCard = deck.showBottomCard();
  expect(bottomCard).toStrictEqual({
    "suit": "Spades",
    "value": "Ace",
  })
  expect(deck.getDeck).toHaveLength(52)
})