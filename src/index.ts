import { Card } from "./types/Card";

export class Deck {
  private deck: Card[]

  constructor() {
    this.deck = [];

    // generate the deck of cards
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    for (let suit in suits) {
      for (let value in values) {
        this.deck.push({
          value: values[value],
          suit: suits[suit]
        })
      }
    }
  }

  /**
   * returns an un-shuffled deck of cards
   */
  public get getDeck(): Card[] {
    return this.deck
  }

  /**
   * returns an shuffled deck of cards
   */
  public get getShuffledDeck(): Card[] {
    let deck = this.deck
    let currentIndex = deck.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = deck[currentIndex];
      deck[currentIndex] = deck[randomIndex];
      deck[randomIndex] = temporaryValue;
    }

    return deck
  }

}

console.log("hello")
let deck = new Deck()
console.log(deck.getDeck)
console.log(deck.getShuffledDeck)
