/* 
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
Title : Body: The Main Game Runner

Author : Quiet Slug from Beige Land 

Description : This will handle the main game which includes 
player joining and leaving and etc. this will also handle 
gameState of the game.

Created : 14th May 2021

Modified : 14th May 2021
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
*/

class Body {
  constructor() {}

  getState() {
    let gameStateRef = database.ref("gameState");
    gameStateRef.on("value", (data) => {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  async start() {
    if (gameState === 0) {
      // A New Player joins.
      cell = new Cell();

      // Making a Cheack that the Players are there in the game.
      let cellCountRef = await database.ref("cellCount").once("value");
      if (cellCountRef.exists()) {
        cellCount = cellCountRef.val();
        cell.getCount();
      }

      // the form
      form = new Form();
      form.display();
    }

    // Player Sprites
    cell1 = createSprite(width / 2, height / 2, 50, 50);
    cell1.shapeColor = "red";

    cell2 = createSprite(width / 2, height / 2, 50, 50);
    cell1.shapeColor = "blue";

    cell3 = createSprite(width / 2, height / 2, 50, 50);
    cell1.shapeColor = "green";

    cell4 = createSprite(width / 2, height / 2, 50, 50);
    cell1.shapeColor = "pink";

    cell5 = createSprite(width / 2, height / 2, 50, 50);
    cell1.shapeColor = "black";

    cells = [cell1, cell2, cell3, cell4, cell5];
  }

  play() {
    // Hidding the Form and gettingt he players.
    form.hide();
    Cell.getCellInfo();

    // Cheack to see all the players are availble
    if (allCells != undefined) {
      // the index
      var index = 0;

      //x and y position of the cells
      var x = 175;
      var y;

      for (const cls in allCells) {
        // Position of the cells.
        index += 1;
        x = x + 200;
        y = displayHeight - allCells[cls].distance;
        cells[index - 1].x = x;
        cells[index - 1].y = y;

        // Player can see there name on the character.
        if (index === cell.index) {
          text(allCells[cls].name, x - 25, y + 25);
        }
      }

      if (keyIsDown(RIGHT_ARROW) && cell.index !== null) {
        cell.distance -= 10;
        cell.update();
      }
      if (keyIsDown(LEFT_ARROW) && cell.index !== null) {
        cell.distance += 10;
        cell.update();
      }
    }

    drawSprite();
  }

  end() {}
}
