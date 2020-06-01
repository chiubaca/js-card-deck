"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
var Deck = /** @class */ (function () {
    function Deck() {
        this.deck = [];
        // generate the deck of cards
        var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        var values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
        for (var suit in suits) {
            for (var value in values) {
                this.deck.push({
                    value: values[value],
                    suit: suits[suit]
                });
            }
        }
    }
    Object.defineProperty(Deck.prototype, "getDeck", {
        /**
         * returns an un-shuffled deck of cards
         */
        get: function () {
            return this.deck;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Deck.prototype, "getShuffledDeck", {
        /**
         * returns an shuffled deck of cards
         */
        get: function () {
            var deck = this.deck;
            var currentIndex = deck.length;
            var temporaryValue, randomIndex;
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = deck[currentIndex];
                deck[currentIndex] = deck[randomIndex];
                deck[randomIndex] = temporaryValue;
            }
            return deck;
        },
        enumerable: false,
        configurable: true
    });
    return Deck;
}());
exports.Deck = Deck;
console.log("hello");
var deck = new Deck();
console.log(deck.getDeck);
console.log(deck.getShuffledDeck);
