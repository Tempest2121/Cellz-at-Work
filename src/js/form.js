class Form {
  constructor() {
    this.title = createElement("h1");
    this.subTitle = createElement("h2");
    this.userName = createInput("Your Name");
    this.submit = createButton("Enter Body");
    this.submit.class("nes-btn is-warning");
  }

  hide() {
    this.title.hide();
    this.subTitle.hide();
    this.userName.hide();
    this.submit.hide();
  }

  display() {
    this.title.html("Cellz at Work");
    this.title.position(width / 5 + 50, height / 5);

    this.subTitle.html("A Multiplayer Game by Quiet Slug from Beige Land");
    this.subTitle.position(width / 7, height / 2 - 50);

    this.submit.position(width / 2 - 80, height / 1.5 + 50);
    this.userName.position(width / 2 - 150, height / 1.5 - 50);

    this.submit.mousePressed(() => {
      console.log("Cell has succesfully entered the Body");
      form.hide();
      gameState = "play";
    });
  }
}
