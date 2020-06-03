import { Deck } from "./Deck"

test("it should return a deck of cards as an array of objects", () => {
  let deck = new Deck()
  expect(deck.showDeck).toHaveLength(52)
})

test("it should shuffle the array of cards", () => {
  let deck = new Deck()
  deck.shuffledDeck()
  expect(deck.showDeck).toHaveLength(52)
})

test("it should return the first card in the array of card objects", () => {
  let deck = new Deck();
  let topCard = deck.showTopCard;
  expect(topCard).toStrictEqual({
    "suit": "Diamonds",
    "value": 2,
  })
  expect(deck.showDeck).toHaveLength(52)
})

test("it should return the last card in the array of card objects", () => {
  let deck = new Deck();
  let bottomCard = deck.showBottomCard;
  expect(bottomCard).toStrictEqual({
    "suit": "Spades",
    "value": "Ace",
  })
  expect(deck.showDeck).toHaveLength(52)
})

test("it should return the first card in the deck, then move that card to the end of the array", () => {
  let deck = new Deck();
  let topCard = deck.showTopCardPlaceToBottom();
  expect(topCard).toStrictEqual({
    "suit": "Diamonds",
    "value": 2,
  })
  expect(deck.showDeck).toHaveLength(52)
})

test("it should return the bottom card in the deck, then move that card to the start of the array", () => {
  let deck = new Deck();
  let bottomCard = deck.showBottomCardPlaceToTop();
  expect(bottomCard).toStrictEqual({
    "suit": "Spades",
    "value": "Ace",
  })
  expect(deck.showDeck).toHaveLength(52)
})