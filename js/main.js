//------------------------------------ 5. OUTSIDE FUNCTION AND WINNING ARRAY ----------------------------------------------------------------//

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)); //gets random numbers within the array aka get random integer.
                                                       //needed for cpu player connection.

}
const winCombos = [                                 //array of winning combos
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

//----------------------------------- 6. CHECKING WINNING COMBOS ----------------------------------------------------------------------------//

const checkWinningCombos = function(board, currentPlayer){  //function 2 arguments board (game), currentPlayer (player & cpu)
    const winningPlayer = currentPlayer+currentPlayer+currentPlayer //"winningPlayer" = three of the cpu ("O") or player ("X")
    for(const winCombo of winCombos ){                   //puts winCombos array into winCombo

      const firstPos = winCombo[0];   //pulls out the 1st index in the arrays
      const secondPos = winCombo[1]; //pulls out the 2nd index in the arrays
      const thirdPos = winCombo[2]; //pulls out the 3rd index in the arrays

      const comboContents = board[firstPos] + board[secondPos] + board[thirdPos]; //combines all 3 indexes

      if ( comboContents === winningPlayer ){  //if comboContents is exactly like winningPlayer

        return true;
      }

                                         //CONCLUSION: pulls out the 3 indexes in the arrays. Only 3 are needed for this game.
                                        //these variables tell us where to look in the board array to find the current
                                       //X or O at those positions, ie. everything in the 1st row ect.

    }                                //end for loop.

    return false;                  //if we havent found any winning matches in the loop, return false.

  };                             //end of the checkWinningCombos(function)

//----------------------------------- 1. START ----------------------------------------------------------------------------------------------//

$(document).ready(function() {       //makes sure all content is preloaded



    let playerTurn = "X"          //creates a changing variable
    let computerTurn = "O"       //creates a changing variable
    let isGameComplete = false; //blocks any further action once game is done.
    let gameMoveCounter = 0;


//---------------------------------- 4. RESET FUNCTION --------------------------------------------------------------------------------------//

    $("#Reset").on("click", function () {     //makes the reset button a function
        let boxesdivs = $(".box");           //goes through box ids
        for ( const boxdiv of boxesdivs){   //puts $(".box") aka boxesdivs into boxdiv
            boxdiv.innerHTML= "";          //clears all boxes by emptying the strings aka ""
        }

        playerTurn = "X"                //makes sure when reset is clicked player starts with X
        isGameComplete = false;        //when we reset game hasnt even started therefore is false
        gameMoveCounter = 0;          //resets game counter.

    })                              //ends the reset function

//--------------------------------- 2. ID COLLECTION FUNCTION & DEBUG DOUBLE CLICK / GAME CONTINUITY ----------------------------------------//

    $(".box").on("click", function(){             //when clicking the id. do this function

        const contents = $(this).html();        //collects contents from index.HTML



        if (isGameComplete || contents !== "") {  //1. checks double clicks on boxes & if game is complete to discontinue game.
                                                 //String gets turned into baloonean.
                                                //if string is empty print true otherwise print false

            return;                       //cutting the logic.
                                         //becaue we want to evaluate if the game is over everytime the player or cpu clicks a box.

        }                              //end of if function.

//--------------------------------- 3. GAME COUNTER/STORING ARRAYS INTO DIVS -------------------------------------------------------//

        gameMoveCounter += 1;                      //gameMoveCounter adds 1 so index doesnt start at 0
        const boxClick = $(this).attr('id');      //boxclick is taking the content of id
        $(this).html(playerTurn);                //playerturn is taking the content of index.html

        let boxesdivs = $(".box");             //creates a boxesDivs collects data from box(divison)
        let boxesValues = [];                 //boxesValues creates an empty array

        for( const box of boxesdivs ){      //for of loop stores info from boxesdives into box
           boxesValues.push(box.innerHTML) //boxValue empty array and pushes it into the box.
                                          //needed in order to identify strings.

       }

//--------------------------------- 7. WIN OR DRAW ------------------------------------------------------------------------------------------//

     const isGameWon = (checkWinningCombos(boxesValues, playerTurn));    //checks array of boxes value and players choices
          if (isGameWon == true) {
            alert('PLAYER ' + playerTurn + ' HAS WON THE GAME!');      //if true player won the game
            isGameComplete = true;                                    //finished game


          } else if(gameMoveCounter===9) {  //else if all game moves are filled and no one has won, call it a draw.

            alert(`IT'S A DRAW!`);

            isGameComplete = true;    //eventhough its a draw its true that the game is over.


        }

//--------------------------------- 8. AI CPU "O" -------------------------------------------------------------------------------------------//

            if (playerTurn === "X") {                       //if 1st click = X

                playerTurn = "O";                         //then 2nd click O

            const highBoxLeft = $("#box1");             //connecting the ids to variables
            const highBoxMid = $("#box2");
            const highBoxRight = $("#box3");
            const midBoxLeft = $("#box4");
            const midBox = $("#box5");
            const midBoxRight = $("#box6");
            const lowBoxLeft = $("#box7");
            const lowBoxMid = $("#box8");
            const lowBoxRight = $("#box9");

              //1. ATTACK

              if (highBoxRight.text()==="O" && midBox.text()==="O" && lowBoxLeft.text()==="") {
              lowBoxLeft.click();

              } else if (lowBoxLeft.text()==="O" && midBox.text()==="O" && highBoxRight.text()==="") {
              highBoxRight.click();

              } else if (lowBoxLeft.text()==="O" && highBoxRight.text()==="O" && midBox.text()==="") {
                midBox.click();

              //2. ATTACK

              } else if (highBoxLeft.text()==="O" && midBox.text()==="O" && lowBoxRight.text()==="") {
                lowBoxRight.click();

              } else if (lowBoxRight.text()==="O" && midBox.text()==="O" && highBoxLeft.text()==="") {
                highBoxLeft.click();

              } else if (highBoxLeft.text()==="O" && lowBoxRight.text()==="O" && midBox.text()==="") {
                midBox.click();

               //3. ATTACK

              } else if (highBoxRight.text()==="O" && midBoxRight.text()==="O" && lowBoxRight.text()==="") {
                lowBoxRight.click();

              } else if (lowBoxRight.text()==="O" && midBoxRight.text()==="O" && highBoxRight.text()==="") {
                highBoxRight.click();

              } else if (highBoxRight.text()==="O" && lowBoxRight.text()==="O" && midBoxRight.text()==="") {
                midBoxRight.click();

               //4.ATTACK

              } else if (highBoxLeft.text()==="O" && midBoxLeft.text()==="O" && lowBoxLeft.text()==="") {
                lowBoxLeft.click();

              } else if (lowBoxLeft.text()==="O" && midBoxLeft.text()==="O" && highBoxLeft.text()==="") {
                highBoxLeft.click();

              } else if (highBoxLeft.text()==="O" && lowBoxLeft.text()==="O" && midBoxLeft.text()==="") {
                midBoxLeft.click();

               //5.ATTACK

              } else if (highBoxMid.text()==="O" && midBox.text()==="O" && lowBoxMid.text()==="") {
                lowBoxMid.click();

              } else if (lowBoxMid.text()==="O" && midBox.text()==="O" && highBoxMid.text()==="") {
                highBoxMid.click();

              } else if (highBoxMid.text()==="O" && lowBoxMid.text()==="O" && midBox.text()==="") {
                midBox.click();

               //6.ATTACK

              } else if (highBoxLeft.text()==="O" && highBoxMid.text()==="O" && highBoxRight.text()==="") {
                highBoxRight.click();

              } else if (highBoxRight.text()==="O" && highBoxMid.text()==="O" && highBoxLeft.text()==="") {
                highBoxLeft.click();

              } else if (highBoxLeft.text()==="O" && highBoxRight.text()==="O" && highBoxMid.text()==="") {
                highBoxMid.click();

               //7.ATTACK

              } else if (midBoxLeft.text()==="O" && midBox.text()==="O" && midBoxRight.text()==="") {
                midBoxRight.click();

              } else if (midBoxRight.text()==="O" && midBox.text()==="O" && midBoxLeft.text()==="") {
                midBoxLeft.click();

              } else if (midBoxLeft.text()==="O" && midBoxRight.text()==="O" && midBox.text()==="") {
                midBox.click();

               //8.ATTACK

              } else if (lowBoxLeft.text()==="O" && lowBoxMid.text()==="O" && lowBoxRight.text()==="") {
                lowBoxRight.click();

              } else if (lowBoxRight.text()==="O" && lowBoxMid.text()==="O" && lowBoxLeft.text()==="") {
                lowBoxLeft.click();

              } else if (lowBoxLeft.text()==="O" && lowBoxRight.text()==="O" && lowBoxMid.text()==="") {
                lowBoxMid.click();

                //1. DEFENCE

              } else if (highBoxRight.text()==="X" && midBox.text()==="X" && lowBoxLeft.text()==="") {
                lowBoxLeft.click();

              } else if (lowBoxLeft.text()==="X" && midBox.text()==="X" && highBoxRight.text()==="") {
                highBoxRight.click();

              } else if (lowBoxLeft.text()==="X" && highBoxRight.text()==="X" && midBox.text()==="") {
                  midBox.click();

                //2. DEFENCE

              } else if (highBoxLeft.text()==="X" && midBox.text()==="X" && lowBoxRight.text()==="") {
                  lowBoxRight.click();

              } else if (lowBoxRight.text()==="X" && midBox.text()==="X" && highBoxLeft.text()==="") {
                  highBoxLeft.click();

              } else if (highBoxLeft.text()==="X" && lowBoxRight.text()==="X" && midBox.text()==="") {
                  midBox.click();

                 //3. DEFENCE

              } else if (highBoxRight.text()==="X" && midBoxRight.text()==="X" && lowBoxRight.text()==="") {
                  lowBoxRight.click();

              } else if (lowBoxRight.text()==="X" && midBoxRight.text()==="X" && highBoxRight.text()==="") {
                  highBoxRight.click();

              } else if (highBoxRight.text()==="X" && lowBoxRight.text()==="X" && midBoxRight.text()==="") {
                  midBoxRight.click();

                 //4. DEFENCE

              } else if (highBoxLeft.text()==="X" && midBoxLeft.text()==="X" && lowBoxLeft.text()==="") {
                  lowBoxLeft.click();

              } else if (lowBoxLeft.text()==="X" && midBoxLeft.text()==="X" && highBoxLeft.text()==="") {
                  highBoxLeft.click();

              } else if (highBoxLeft.text()==="X" && lowBoxLeft.text()==="X" && midBoxLeft.text()==="") {
                  midBoxLeft.click();

                 //5. DEFENCE

              } else if (highBoxMid.text()==="X" && midBox.text()==="X" && lowBoxMid.text()==="") {
                  lowBoxMid.click();

              } else if (lowBoxMid.text()==="X" && midBox.text()==="X" && highBoxMid.text()==="") {
                  highBoxMid.click();

              } else if (highBoxMid.text()==="X" && lowBoxMid.text()==="X" && midBox.text()==="") {
                  midBox.click();

                 //6. DEFENCE

              } else if (highBoxLeft.text()==="X" && highBoxMid.text()==="X" && highBoxRight.text()==="") {
                  highBoxRight.click();

              } else if (highBoxRight.text()==="X" && highBoxMid.text()==="X" && highBoxLeft.text()==="") {
                  highBoxLeft.click();

              } else if (highBoxLeft.text()==="X" && highBoxRight.text()==="X" && highBoxMid.text()==="") {
                  highBoxMid.click();

                 //7. DEFENCE

              } else if (midBoxLeft.text()==="X" && midBox.text()==="X" && midBoxRight.text()==="") {
                  midBoxRight.click();

              } else if (midBoxRight.text()==="X" && midBox.text()==="X" && midBoxLeft.text()==="") {
                  midBoxLeft.click();

              } else if (midBoxLeft.text()==="X" && midBoxRight.text()==="X" && midBox.text()==="") {
                  midBox.click();

                 //8. DEFENCE

              } else if (lowBoxLeft.text()==="X" && lowBoxMid.text()==="X" && lowBoxRight.text()==="") {
                  lowBoxRight.click();

              } else if (lowBoxRight.text()==="X" && lowBoxMid.text()==="X" && lowBoxLeft.text()==="") {
                  lowBoxLeft.click();

              } else if (lowBoxLeft.text()==="X" && lowBoxRight.text()==="X" && lowBoxMid.text()==="") {
                  lowBoxMid.click();

                //1. POWER POSITIONS

              } else if (midBox.text()==="") {
                  midBox.click();

              } else if (highBoxRight.text()==="") {
                  highBoxRight.click();

              } else if (lowBoxLeft.text()==="") {
                  lowBoxLeft.click();

              } else if (highBoxLeft.text()==="") {
                  highBoxLeft.click();

              } else if (lowBoxRight.text()==="") {
                  lowBoxRight.click();

              } else {

                let boxesdivs = $(".box");                  //calls upon the box divs intel to boxes divs as above.
                let unfilledBoxes = [];                   //creates an empty array
                for(const boxdiv of boxesdivs){          //for of loop doing the same feature as above
                    if(boxdiv.innerHTML===""){          //goes through each box thats empty in HTML
                        unfilledBoxes.push(boxdiv);    //looks for one which has nothing inside it
                    }
                }

                  const randomIndex = getRandomInt(unfilledBoxes.length); //gets random integer within the unfill box length.
                  randomBox = unfilledBoxes[randomIndex];                //from the list of unfilled boxes we pick a random one
                  randomBox.click();                                    //activate auto click system

            }


              } else if (playerTurn === "O") {  //if its O
                 playerTurn = "X";             //then next click is X
            }


    })                                     //closing bracket of .box id function

});                                      // closes document.ready
