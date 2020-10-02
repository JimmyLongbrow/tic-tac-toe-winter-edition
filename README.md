Tic-Tac-Toe
===========

Version 1.0.1 - Thu 23 Jul 2020

by Nemo Petrovic  
<https://github.com/JimmyLongbrow/tic-tac-toe/blob/master/index.html>


Introduction
------------

Nemo Petrovic's Tic-Tac-Toe global game has come to light in the latest "Winter Edition". Try your best to put the AI to the test with 48 new hard coded Attack and Defend Movements and 5 Power Positions, making it harder then ever to put the X next to XX (no pun intended). Much like all the other Tic-Tac-Toe games out there, the objective is still the same, beat your "O"ponent by getting three X's in a row, connecting them vertically, horizontally, or diagonally. The first player that gets 3 of the same letters in a row wins, otherwise game ends in a draw. But don't worry you can hit the "Play Agin" button to have a second crack. So ask yourself, are you Game to Tic-Tac-Toe? Or does the complexity of the "Winter Edition" make you freeze your boot(toe-boot-behind?...Oh, forget it!).

<img src="https://raw.githubusercontent.com/JimmyLongbrow/tic-tac-toe/master/tic-tac-toe/tictactoeWinterEdition.png" alt= "Tic Tac Toe: Winter Edition"/>

Installation and Requirements
-----------------------------

Click and Play: 
# https://jimmylongbrow.github.io/tic-tac-toe-winter-edition/

OR

Tic-Tac-Toe works with Mac/PC and any browser.

1.  Download Atom <https://atom.io/>


2.  Go to <https://github.com/JimmyLongbrow/tic-tac-toe/blob/master/index.html>
    And copy the index.html ,  main.js , and main.js file to your Atom project.
    Make sure you have the latest jQuery attached to the file. For further jQuery
    Instructions go to <https://jquery.com/>.

3.  Locate your "Project File" and "Right Click" on it, then "Left Click" on "Open in  
    Browser".

4.  Enjoy!

Note that by default, Tic-TacToe produces HTML output.Tech used (JS, HTML, CSS, jQuery) to configure the game.


Project Description
-------------------

The Project consists of 8 main sections;

1.  //START;
    Fairly basic structure consists of a document ready function that serves as the main      
    body of the project and 4 variables for the player/ai/gamestatus/and move counter.



2.  //ID COLLECTION FUNCTION & DEBUG DOUBLE CLICK / GAME CONTINUITY;
    This is where the Box Click Function is formed and Contents are stored so that
    The cpu can keep track of when the game is finished and prevents players from
    Double-Clicking on the same box.


3.  //GAME COUNTER/CLICK & PLAYER DATA COLLECTION/AND BOX VALUES PUSH INTO ARRAY
    This section counts the Game in index form, needed to trigger Draw Alert.
    It also shares data from id and inner html to the player turn and box click
    functions above. Finally pushes the inner html and box division into the Box Values
    Array in order to notify the cpu if the string is empty.    


4.  //RESET FUNCTION
    This is where the Play Again Button is connected from the reset division and the reset
    Function is structured. We also add player Turn X, game complete false, and game
    Back to zero so it can properly restart.


5.  //OUTSIDE OF MAIN FUNCTION & WINNING COMBOS
    A getRandom Math.floor loop is coded here along with an array of 8 arrays of winning
    index combinations.


6.  //CHECK WINNING COMBOS
    A for of loop within a function is created here to go through the winning combos
    In order to notify the cpu which a player has won.

7.  //WIN OR DRAW NOTIFICATION
    If and an if else within a function is then created to alert the players whether if
    Someone won or if its a draw.

8.  //AI CPU "O"
    48 winning and defending AI combinations are coded here along with triggering a random
    Move if all else fails. This is also the are that's let the cpu know which letter goes
    next.



Bugs
----

To file bug reports or feature requests please send email to:
<nemo@tictactoe.net>.



Version History
---------------

1.0.1 (23 Jul 2020):

+	AI discontinues playing after it notices its not going to win.

+	Fix mobile phone resolution configuration on css.

+	Add background music.

+	Change Alerts in to Div hide/unhide triggers.

+	Highlight letters when the player wins.

+	Add SFX noise to the AI and player click.

+	Add Crowd noise when Player wins.

+	Add 'Boo' noise when the AI wins.

+	Add 'Ohhh' noise when it's a draw.

+	Add visual efx when the player wins.

+	Create a SFX noise when Play Again button is clicked.

+	Create a multi-player/various browser Tic-Tac-Toe version.

+	Create a score board on either end of the page.


Donations
---------

Donations to support Markdown's development are happily accepted. See:
<https://github.com/JimmyLongbrow> for details.



Copyright and License
---------------------

Copyright (c) 2020 Nemo Petrovic   
<https://github.com/JimmyLongbrow/>   
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

* Redistributions of source code must retain the above copyright notice,
  this list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright
  notice, this list of conditions and the following disclaimer in the
  documentation and/or other materials provided with the distribution.

* Neither the name "Tic-Tac-Toe:Winter Edition" nor the names of its contributors may
  be used to endorse or promote products derived from this software
  without specific prior written permission.

This software is provided by the copyright holders and contributors "as
is" and any express or implied warranties, including, but not limited
to, the implied warranties of merchantability and fitness for a
particular purpose are disclaimed. In no event shall the copyright owner
or contributors be liable for any direct, indirect, incidental, special,
exemplary, or consequential damages (including, but not limited to,
procurement of substitute goods or services; loss of use, data, or
profits; or business interruption) however caused and on any theory of
liability, whether in contract, strict liability, or tort (including
negligence or otherwise) arising in any way out of the use of this
software, even if advised of the possibility of such damage.
