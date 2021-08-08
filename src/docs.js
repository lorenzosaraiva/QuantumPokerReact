import React from 'react';
export default function Docs(props){
    return(
<div class="columns">
<div class="column">
</div>
<div class="column is-three-quarters">
<div className ="block">

<div className ="content">

<h1 className ="title">Rules</h1>


<h2 className ="subtitle">Introduction</h2>
<p>
    <p>
</p>
        This is a rule book for Quantum Poker, meant to be self-sufficient even for people 
        that have never played Poker before. Its aim is to teach the game, not the quantum 
        concepts behind it. For that, refer to the article about Quantum Poker.
    </p>

<h2 className ="subtitle">Rules</h2>
<p>
    <p>
</p>
        To avoid reinventing (rewriting?) the wheel, the bulk of these rules is edited from
        the Poker Stars website rules. These rules are based on the Texas Hold'em No Limit 
        version. Poker is played with the standard deck with 13 cards of each suit of ranks 
        2, 3, 4, 5, 6, 7, 8, 9, 10, Jack(J), Queen(Q), King(K) and Ace(A), in this order or
        value. 
    </p>

<h2 className ="subtitle">Blinds</h2>
<p>
    <p>
</p>
        In Hold'em, a marker called ‘the button’ or ‘the dealer button’ indicates which player
        is the nominal dealer for the current game. Before the game begins, the player immediately
        clockwise from the button posts the "small blind", the first forced bet. The player immediately 
        clockwise from the small blind posts the "big blind", which is typically twice the size of the 
        small blind, but the blinds can vary depending on the stakes and betting structure being played.
        Now, each player receives their two hand cards. Betting action proceeds clockwise around the 
        table, starting with the player ‘under the gun’ (immediately clockwise from the big blind).
    </p>   
<h2 className ="subtitle">Player Betting Options</h2>
<p>
    <p>
</p>
        In Hold'em the available classical actions are ‘fold’, ‘check’, ‘bet’, ‘call’ or ‘raise’. Exactly which options are available depends on the action taken by the previous players. If nobody has yet made a bet, then a player may either check (decline to bet, but keep their cards) or bet. If a player has bet, then subsequent players can fold, call or raise. To call is to match the amount the previous player has bet. To raise is to not only match the previous bet, but to also increase it. 
    </p>
<h2 className ="subtitle">Pre-Flop</h2>
<p>
After seeing their hole cards, each player now has the option to play their hand by calling or raising the big blind. The action begins to the left of the big blind, which is considered a ‘live’ bet on this round. That player has the option to fold, call or raise. For example, if the big blind was 2, it would cost 2 to call, or at least 4 to raise. Action then proceeds clockwise around the table. Betting continues on each betting round until all active players (who have not folded) have placed equal bets in the pot.
</p>

<h2 className ="subtitle">Flop</h2>
<p>
Now, three cards are dealt face-up on the board. This is known as ‘the flop’. The three cards on the flop are community cards, available to all players still in the hand. Betting on the flop begins with the active player immediately clockwise from the dealer. The betting options are similar to pre-flop, however if nobody has previously bet, players may opt to check, passing the action to the next active player clockwise.
</p>

<h2 className ="subtitle">Turn</h2>
<p>
When the betting action is completed for the flop round, the ‘turn’ is dealt face-up on the board. The turn is the fourth community card. Another round of betting ensues, beginning with the active player immediately clockwise from the button.
</p>

<h2 className ="subtitle">River</h2>
<p>
When betting action is completed for the turn round, the ‘river’ is dealt face-up on the board. The river is the fifth and final community card in a hand. Betting again begins with the active player immediately clockwise from the button, and the same betting rules apply as they do for the flop and turn, as explained above.
</p>

<h2 className ="subtitle">Showdown</h2>
<p>
If there is more than one remaining player when the final betting round is complete, the last person to bet or raise shows their cards, unless there was no bet on the final round in which case the player immediately clockwise from the button shows their cards first. The player with the best five-card poker hand wins the pot. The hand is mounted using the table cards and the hand cards, picking the strongest combination possible. The player may use only one of their hand cards. The player can also use no cards in his hand at all, called "playing the table", but it means you have the weakest hand possible. In the event of identical hands, the pot will be equally divided between the players with the best hands. After the pot is awarded, a new hand of Hold'em is ready to be played. The button now moves clockwise to the next player, blinds and antes are once again posted, and new hands are dealt to each player.
</p>

<h2 className ="subtitle">Hand Strengths</h2>
<p>1. Royal flush</p>
<p>A, K, Q, J, 10, all the same suit.</p>
<p>A♡ K♡ Q♡ J♡ T♡</p>
<p>2. Straight flush </p>
<p>Five cards in a sequence, all in the same suit. </p>
<p>8♣ 7♣ 6♣ 5♣ 4♣  </p>
<p>3. Four of a kind</p>
<p>All four cards of the same rank.</p>
<p>J♡ J♣ J♢ J♠ 7♣  </p>
<p>4. Full house </p>
<p>Three of a kind with a pair. </p>
<p>10♡ 10♣ 10♢ 9♠ 9♢  </p>
<p>5. Flush </p>
<p>Any five cards of the same suit, but not in a sequence. </p>
<p>4♠ J♠ 8♠ 2♠ 9♠  </p>
<p>6. Straight </p>
<p>Five cards in a sequence, but not of the same suit.</p>
<p>J♡ 10♣ 9♢ 8♠ 7♣  </p>
<p>7. Three of a kind  </p>
<p>Three cards of the same rank. </p>
<p>7♡ 7♠ 7♣ K♡ 3♡  </p>
<p>8. Two pair  </p>
<p>Two different pairs.</p>
<p>4♠ 4♢ 3♠ 3♢ Q♠  </p>
<p>9. Pair </p>
<p>Two cards of the same rank. </p>
<p>A♢ A♠ 8♢ 4♠ 7♡   </p>
<p>10. High Card </p>
<p>When you haven't made any of the hands above, the highest card plays. </p>
<p>In the example below, the jack plays as the highest card. </p>
<p>3♡  J♠  5♡  4♡  2♡  </p>
<p>If two players share the same type of hand, the one with higher ranking wins. That is, 
a pair of 10s is stronger than a pair of 9s. If they have the same pair, the highest
card of the rest of the hand is the tiebreaker, called the kicker. All suits are equal. 
In the full house, the tiebreaker is based on the three of kind, that is, 99922 beats 888AA. </p>
<h2 className ="subtitle">Quantum Actions</h2>
<p>
Besides one of the classical actions, the player has the option to perform one Quantum Action. It 
is important to note that is not necessary to perform one Quantum Action per turn, as opposed to 
the classical actions. So each turn a player needs to perform a classical action and can perform one quantum action.
</p>

<h6 className ="subtitle is-6">Quantum Draw</h6>
<p>
The first quantum action is called the Quantum Draw. In the Quantum Draw, the player will pick one 
of its cards to be the target. This will effectively double the number of possibilities for that card, 
drawing random cards from the deck. A quick example: Player has two cards:  
</p>
<p>
4♡ 5 ♢  
</p>

<p>
If the player Quantum Draw on the 4♡, the card that was a 4♡ will become a sum of possibilities of the original
4♡ and a new card, picked randomly, lets say a 3 ♠. His card becomes (4♡ \ 3 ♠), with 1/2 of chance for each. So his hand
would become: 
</p>
<p>
(<sup>1</sup>&frasl;<sub>2</sub> 4♡ + <sup>1</sup>&frasl;<sub>2</sub> 3♠)  5 ♢
</p>
<p>
The card will remain a superposition until the showdown, when the final card value is picked at random. 
This process can be done up to 5 times in each card. Still on our example, if the player chose to Quantum
Draw on the same card again, it would double again the possibilities, leaving the player with the hand 
(as always, picking the new cards randomly):
</p>

<p> 
(<sup>1</sup>&frasl;<sub>4</sub> 4♡ + <sup>1</sup>&frasl;<sub>4</sub> 3♠ + <sup>1</sup>&frasl;<sub>4</sub> A♠ + <sup>1</sup>&frasl;<sub>4</sub> J♢)  5 ♢

</p>
<p>
The player could Quantum Draw again, this time on the 5 ♢, leaving their hand like this:
</p>
<p>
(<sup>1</sup>&frasl;<sub>4</sub> 4♡ + <sup>1</sup>&frasl;<sub>4</sub> 3♠ + <sup>1</sup>&frasl;<sub>4</sub> A♠ + <sup>1</sup>&frasl;<sub>4</sub> J♢)  (<sup>1</sup>&frasl;<sub>2</sub> 5 ♢ + <sup>1</sup>&frasl;<sub>2</sub> K♡)
</p>
<p>
This hand, in the showdown, could become any possible combination of the two cards, in a total of 8 options:
</p>
<p>4♡ 5♢</p> 
<p>4♡ K♡</p> 
<p>3♠ 5♢</p> 
<p>3♠ K♡</p> 
<p>A♠ 5♢</p> 
<p>A♠ K♡</p> 
<p>J♢ 5♢</p> 
<p>J♢ K♡</p> 

<h6 className ="subtitle is-6">Same Card Entangle</h6>
<p>
The entanglement is the second quantum action. It names come from the quantum theory, where you can entangle two 
quantum bits and make them have always the same value. But this is outside the scope of this rulebook. We'll try 
to explain the entangle action with the least amount of quantum concepts possible.
</p>
<p>
There are two types on entangle in quantum poker. In the entangle you have an origin card and a target card. 
If the origin and target cards are the same, you have a same card entanglement. In the same card entanglement, 
you will swap half of the possibilities for new ones. Thus, to entangle, you need at least 2 possibilities in 
the card. From the following hand:
</p>
<p>
(<sup>1</sup>&frasl;<sub>2</sub> 4♡ + <sup>1</sup>&frasl;<sub>2</sub> 3♠)  5 ♢ 
</p>
<p>
You can't choose do a same card entangle is the second card yet, since it has only 1 possibility.
If we do a same card entangle on the first card, it will swap one of the possibilities with a new one:
</p>
<p>
(<sup>1</sup>&frasl;<sub>2</sub> 4♡ + <sup>1</sup>&frasl;<sub>2</sub> Q♣)  5 ♢ 
</p>
<p>
This seems a totally random process, but you have the information of which possibilities will be swapped out. 
But, to fully understand how this works, we'll need to delve a bit into binary numbers. If you have no idea
what are binary numbers, it is strongly suggested to read up a bit
</p>
<p>
Binary numbers are representation of numbers that consist of strings of 0s and 1s. The realm of possibilities
of each card is represented by a binary of string of up to 5 digits. When the hand starts, this string is empty
and the card has only one possible outcome. When you Entangle or Quantum Draw on a card, you are adding one digit
the the binary string that represents all this cards possibilities. With one Quantum Draw, this string has now one
digit, that can be either 0 or 1, hence the two possible outcomes. If you quantum draw again, now the string will
have two digits, with four possible outcomes - 00, 01, 10, 11 - each one corresponding to a result.
</p>
<p>
This is relevant to the Entangle because what it really does is forcing two digits - one chosen by the player,
the origin, and the recently added one, the target -  to have the same value. This is why the same card entangle 
will behave in the described way. In the shown example, the card state goes from:
</p>
<p>0 - 4♡</p>  
<p>1 - 3♠</p> 
<p>To: </p>
<p>00 - 4♡</p>
<p>11 - Q♣</p>
<p>Since the two digits are entangled, they will share the same value, so 01 and 10 - which correspond to the 3♠ and another card,
    whose value is never known by the player - are discarded. This is strategically important because the player knows the value of each card. 
    Every card value corresponds to the order it appeared, written in binary. The first card is 0, the second is 1, the third is 01, the fourth
    10, and so forth. It is important to note that 0s added to the left don't change the value, so as more digits are added, 1 becomes 01, then 
    001, 0001 and 00001. In the shown example, the player knows that 0 is the 4♡ and 1 is the 3♠, so they also know that, if they entangle on that
    same card, the 3 ♠ - that corresponds to the 01 binary string - will be the one discarded. This gives the player a bit of control over the
    randomness of the Quantum Actions.</p>

<h6 className ="subtitle is-6">Different Card Entangle</h6>
<p>
The different card entangle has the same principle of the same card entangle - to force two digits to have the same value. But this time, each digit
is from a different card. First, you pick the origin card, and chose which digit is going to be entangled. We shall follow and example. The player 
hand is:    
</p>
(<sup>1</sup>&frasl;<sub>4</sub> 4♡ + <sup>1</sup>&frasl;<sub>4</sub> 3♠ + <sup>1</sup>&frasl;<sub>4</sub> A♠ + <sup>1</sup>&frasl;<sub>4</sub> J♢)  5 ♢    
<p>The first card has four current options, that means its corresponding binary string has two active digits, with the following possible options:</p>    
<p>00 - 4♡</p> 
<p>01 - 3♠</p> 
<p>10 - A♠</p> 
<p>11 - J♢</p> 
<p>The second card, on the other hand, is still on the initial state, so its binary string is empty and there is only one possibility. 
    The player could pick any of the digits from the first card to entangle with the target digit, in this case, a new one on the second
    card. This won't rule out any possible card outcome by itself, it will rule out card combinations. If the first digit is the origin, 
    the player will have the following possible hand combinations, assuming K ♢ is the randomly drawn card:    
    </p>
<p>(<sup>1</sup>&frasl;<sub>2</sub> 4♡ + <sup>1</sup>&frasl;<sub>2</sub> 3♠) 5♢</p>
<p>(<sup>1</sup>&frasl;<sub>2</sub> A♠ + <sup>1</sup>&frasl;<sub>2</sub> J♢) K♢</p>
<p>With 1/2 chance for each. Or, already taking that chance into account:</p>
<p><sup>1</sup>&frasl;<sub>4</sub> 4♡ 5♢</p>    
<p><sup>1</sup>&frasl;<sub>4</sub> 3♠ 5♢</p>    
<p><sup>1</sup>&frasl;<sub>4</sub> A♠ K♢</p>    
<p><sup>1</sup>&frasl;<sub>4</sub> J♢ K♢</p>    
<p>To illustrate a bit more the Entangle, if the player had chosen instead to entangle the second digit from the first card, his hand would have
   the following possibilities:    </p>
<p><sup>1</sup>&frasl;<sub>4</sub> 4♡ 5♢</p>
<p><sup>1</sup>&frasl;<sub>4</sub> A♠ 5♢</p>
<p><sup>1</sup>&frasl;<sub>4</sub> 3♠ K♢</p>
<p><sup>1</sup>&frasl;<sub>4</sub> J♢ K♢</p>
<p>A small, but significant change. The player already knew beforehand that, had if he chooses the second digit, that the 4♡ and A♠ were to be
    matched with the current card, the 5 ♢, and the 3 ♠ and J ♢ would be matched with the new one, yet do be drawn. 
</p>

<h6 className ="subtitle is-6">Cost of Quantum Actions</h6>
<p>
The Quantum Actions are an extra tool for the player, so they need to have an associated cost. The cost of the Quantum Actions is something that will need playtesting to balance out. The two approaches are to base their cost on the big blind or on the pot size. For starters, we'll use the Quantum Draw costing 3 big blinds and the Entangle costing 5 big blinds. This cost shouldn't go directly into the pot - this would simply be akin to a regular raise, and would have to be covered by the other players. For that reason, all the costs from Quantum Actions go into a separate pot, called side pot. The side pot goes to the winner of the hand, same as the regular pot.
</p>

</div></div>
</div>
<div class="column">
</div></div>
)}