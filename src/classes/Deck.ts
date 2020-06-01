import { Card } from "../types/Card";

export class Deck {
  private deck: Card[]

  constructor() {
    this.deck = [];

    // generate the deck of cards
    const suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
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
   * returns the deck of cards in it's current state
   */
  public get getDeck(): Card[] {
    return this.deck
  }

  /**
   * Returns the first card in the deck and moves it last .This changes the state of the deck
   */
  public showTopCard(): Card {
    let deck = this.deck;
    let topCard = deck.shift()
    let newDeck = [...deck, topCard]
    this.deck = newDeck;
    return topCard
  }

  /**
   * Returns the last card in the deck and moves it first. This changes the state of the deck
   */
  public showBottomCard(): Card {
    let deck = this.deck;
    let bottomCard = deck.pop()
    let newDeck = [bottomCard, ...deck]
    this.deck = newDeck;
    return bottomCard
  }

  /**
   * Returns an shuffled deck of cards. This changes the state of the deck
   */
  public shuffledDeck(): Card[] {
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
    this.deck = deck;
    return this.deck
  }

}